export interface Event<T> {
  isEqualTo(other: Event<T>): boolean;
}

export abstract class Event<T> {
  protected readonly _id;

  constructor(id: string) {
    this._id = id;
  }

  isEqualTo(other: Event<T>): boolean {
    return this._id === other._id;
  }
}
