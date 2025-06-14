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
        to: Math.min(page * this.pageSize, total),
        total,
      },
    };
  }

  async countByQuery(query: FilterQuery<TDocument>): Promise<number> {
    return this.model.countDocuments({ ...query, deletedAt: null }).exec();
  }

  async findByQuery(
    query: FilterQuery<TDocument>,
    page: number = 1,
  ): Promise<TModel[]> {
    const documents = await this.model
      .find({ ...query, deletedAt: null })
      .limit(this.pageSize)
      .skip(this.pageSize * (page - 1))
      .exec();

    return documents.map((item) => this.transform(item));
  }

  async findOne(query: FilterQuery<TDocument>): Promise<TModel> {
    const result = await this.model
      .findOne({ ...query, deletedAt: null })
      .exec();

    if (!result) {
      throw new Error('item not found');
    }

    return this.transform(result);
  }

  async findOneById(id: string): Promise<TModel> {
    const objectId = new Types.ObjectId(id);

    const result = await this.model
      .findOne({ _id: objectId, deletedAt: null })
      .exec();

    if (!result) {
      throw new Error('item not found' + id);
    }

    return this.transform(result);
  }

  async create<T>(item: T): Promise<TModel> {
    const createdDocument = await this.model.create(item);

    return this.transform(createdDocument);
  }

  async update<T>(id: string, item: T): Promise<TModel> {
    const objectId = new Types.ObjectId(id);

    const result = await this.model
      .findOneAndUpdate({ _id: objectId, deletedAt: null }, item)
      .exec();
    if (!result) {
      throw new Error('item not found: ' + id);
    }

    return this.transform(result);
  }

  async delete(id: string): Promise<TModel> {
    const objectId = new Types.ObjectId(id);

    const result = await this.model
      .findOneAndUpdate({ _id: objectId }, { deletedAt: new Date() })
      .exec();

    return this.transform(result);
  }

  protected transform(item: TDocument): TModel {
    if (!item || typeof item !== 'object' || !('_doc' in item)) {
      throw new Error('Invalid document format');
    }

    const newModel: TModel = new this.modelConstructor();
    const doc = (item as { _doc: Record<string, any> })['_doc'];

    for (const key in newModel) {
      if (Object.prototype.hasOwnProperty.call(doc, key)) {
        newModel[key as keyof TModel] = doc[key] as TModel[keyof TModel];
      }
    }
    newModel['id'] = doc['_id'] as string;
    return newModel;
  }
}
