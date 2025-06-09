export abstract class BaseDto {
  static transform<T extends BaseDto>(this: new () => T, item: any): T {
    const newObj: T = new this();
    for (const key in newObj) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        newObj[key] = item[key];
      }
    }
    return newObj;
  }
}
