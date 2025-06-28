export interface ITransactionSession {
  startTransaction(): Promise<void>;
  commitTransaction(): Promise<void>;
  abortTransaction(): Promise<void>;
  endSession(): Promise<void>;
}

export interface ITransactionManager {
  startSession(): Promise<ITransactionSession>;
  withTransaction<T>(
    fn: (session: ITransactionSession) => Promise<T>,
  ): Promise<T>;
}
