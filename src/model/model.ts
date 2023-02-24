import { v4 as uuid } from "uuid";
import { DB, StoreTable } from "@plugins/database";

export interface ModelColumn {
  [name: string]: string;
  default?: any;
}

export abstract class Model {

  private $tableName: string = "";
  private $id: string | undefined = undefined;
  private $columns: any = {};

  constructor(tableName: string, columns: ModelColumn[]) {
    this.$tableName = tableName;
    columns.forEach((col: ModelColumn) => {
      this.$columns[col.name] = col.default || null;
    });
  }

  // ID

  get id(): string | undefined {
    return this.$id;
  }

  // SAVE 

  save() {
    if (this.id) {
      const index: number | undefined | null = this.db.findIndex((el: Model) => el.id === this.id);
      this.db.splice(index, 1);
    } else {
      this.$id = uuid();
    }

    this.db.push(this);
    this.dbStore();
  }

  // HELPERS

  private get db(): Model[] {
    return DB[this.$tableName] as Model[];
  }

  private dbStore(): void {
    StoreTable(this.$tableName);
  }

}
