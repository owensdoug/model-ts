interface ValueObject<T>
  extends Readonly<{
    type: string;
    value: T;
  }> {}
