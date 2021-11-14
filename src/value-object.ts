export interface ValueObject<T>
  extends Readonly<{
    type: string;
    value: T;
  }> {
  isEqualTo<T, V extends ValueObject<T>>(value1: V, value2: V): boolean;
}

export class ValueObject<T> implements ValueObject<T> {
  isEqualTo<T, V extends ValueObject<T>>(value1: V, value2: V): boolean {
    return value1.value === value2.value;
  }
}
