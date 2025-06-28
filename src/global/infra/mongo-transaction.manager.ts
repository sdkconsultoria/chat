import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { ClientSession, Connection } from 'mongoose';
import {
  ITransactionManager,
  ITransactionSession,
} from '../app/ports/transaction.interface';

@Injectable()
export class MongoTransactionManager implements ITransactionManager {
  constructor(@InjectConnection() private connection: Connection) {}

  async startSession(): Promise<ITransactionSession> {
    const session = await this.connection.startSession();
    return new MongoTransactionSession(session);
  }

  async withTransaction<T>(
    fn: (session: ITransactionSession) => Promise<T>,
  ): Promise<T> {
    const session = await this.startSession();
    try {
      await session.startTransaction();
      const result = await fn(session);
      await session.commitTransaction();
      return result;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      await session.endSession();
    }
  }
}

class MongoTransactionSession implements ITransactionSession {
  constructor(private session: ClientSession) {}

  async startTransaction(): Promise<void> {
    await this.session.startTransaction();
  }

  async commitTransaction(): Promise<void> {
    await this.session.commitTransaction();
  }

  async abortTransaction(): Promise<void> {
    await this.session.abortTransaction();
  }

  async endSession(): Promise<void> {
    await this.session.endSession();
  }
}
