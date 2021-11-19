export interface ValueObject<T>
  extends Readonly<{
    type: string;
    value: T;
  }> {
  isEqualTo<T, V extends ValueObject<T>>(thisValue: V, thatValue: V): boolean;
}

export abstract class ValueObject<T> implements ValueObject<T> {
  isEqualTo<T, V extends ValueObject<T>>(thisValue: V, thatValue: V): boolean {
    return thisValue.value === thatValue.value;
  }
}
