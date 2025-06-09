/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FilterQuery, Model, Types } from 'mongoose';
import { IGenericRepository } from '../app/generic.repository.interface';
import { PaginationResultDto } from '../app/dto/pagination-result.dto';

export abstract class GenericRepository<TModel, TDocument>
  implements IGenericRepository<TModel>
{
  protected model: Model<TDocument>;
  private pageSize = 20;
  private modelConstructor: { new (): TModel };

  constructor(model: Model<TDocument>, modelConstructor: { new (): TModel }) {
    this.model = model;
    this.modelConstructor = modelConstructor;
  }

  async findByQueryPaginated(
    query: FilterQuery<TDocument>,
    page: number = 1,
  ): Promise<PaginationResultDto<TModel>> {
    const total = await this.countByQuery(query);
    const results = await this.findByQuery(query, page);

    return {
      data: results,
      meta: {
        current_page: page,
        from: page * this.pageSize - this.pageSize + 1,
        last_page: Math.ceil(total / this.pageSize),
        per_page: this.pageSize,
        to: page * this.pageSize,
        total,
      },
    };
  }

  async countByQuery(query: any): Promise<number> {
    return await this.model
      .find({ ...query, deletedAt: null })
      .countDocuments()
      .exec();
  }

  async findByQuery(query: any, page: number = 1): Promise<TModel[]> {
    return (
      await this.model
        .find({ ...query, deletedAt: null })
        .limit(this.pageSize)
        .skip(this.pageSize * (page - 1))
        .exec()
    ).map((item) => this.transform(item));
  }

  async findOne(id: string): Promise<TModel> {
    const objectId = new Types.ObjectId(id);

    const result = await this.model
      .findOne({ _id: objectId, deletedAt: null })
      .exec();
    if (!result) {
      throw new Error('item not found' + id);
    }
    return this.transform(result);
  }

  async create(item: any): Promise<TModel> {
    return this.transform(await this.model.create(item));
  }

  async update(id: string, item: any): Promise<TModel> {
    const objectId = new Types.ObjectId(id);

    const result = await this.model
      .findOneAndUpdate({ _id: objectId, deletedAt: null }, item)
      .exec();
    if (!result) {
      throw new Error('item not found: ' + id);
    }

    return await this.findOne(id);
  }

  async delete(id: string): Promise<TModel> {
    const objectId = new Types.ObjectId(id);

    const result = await this.model
      .findOneAndUpdate({ _id: objectId }, { deletedAt: new Date() })
      .exec();

    return this.transform(result);
  }

  protected transform(item: TDocument): TModel {
    const newModel: TModel = new this.modelConstructor();
    const doc = item['_doc'];

    for (const key in newModel) {
      if (doc.hasOwnProperty(key)) {
        newModel[key] = doc[key];
      }
    }
    newModel['id'] = doc['_id'];
    return newModel;
  }
}
