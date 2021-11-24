import { Deletable } from "./deletable";
import { Archivable } from "./archivable";
import { Auditable } from "./auditable";
import { Cloneable } from "./cloneable";
import { Creatable } from "./creatable";

export interface Entity<T>
  extends Creatable,
    Cloneable,
    Auditable,
    Archivable,
    Deletable {
  id: string;
  isEqualTo(other: Entity<T>);
}

export abstract class Entity<T> implements Entity<T> {
  readonly _id: string;

  constructor(id: string) {
    this._id = id;
  }

  public isEqualTo(other: Entity<T>): boolean {
    return this._id === other.id;
  }
}
