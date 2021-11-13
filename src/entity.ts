import { Deletable } from "./deletable";
import { Archivable } from "./archivable";
import { Auditable } from "./auditable";
import { Cloneable } from "./cloneable";
import { Creatable } from "./creatable";

export interface Entity
  extends Creatable,
    Cloneable,
    Auditable,
    Archivable,
    Deletable {
  id: string | number;
}

export abstract class Entity implements Entity {}
