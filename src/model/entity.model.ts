import { DB } from "@/plugins/database";

export enum ColumnType {
  STRING = "string",
  NUMBER = "number",
  DATE = "date",
  TIME = "date",
  BOOL = "number",
}

export interface EntityColumn {
  name: string;
  type: ColumnType;
  default: any;
}

export class EntityModel {

  private readonly attrs: any = {
    tableName: "",
    tableColumns: [],
    data: {},
  };

  constructor(tableName: string, tableColumns: EntityColumn[]) {
    this.attrs.tableName = tableName;
    this.attrs.tableColumns = tableColumns;
    this.createTable();
    this.setDefaults();
  }

  get id(): number | undefined {
    return this.attrs.data.id;
  }

  getData(key: string): any {
    return this.attrs.data[key];
  }

  setData(key: string, value: any) {
    this.attrs.data[key] = value;
  }

  drop(): void {
    DB().exec(`DROP TABLE ${this.attrs.tableName};`);
  }

  save(): void {
    if (this.id) {
      // update
    } else {
      this.insert();
    }
  }

  private insert(): void {
    DB().exec(`SELECT * INTO ${this.attrs.tableName} FROM ?`, [[this.attrs.data]]);
    DB().exec("COMMIT;");

    if (!this.id) {
      const table: any = DB().tables[this.attrs.tableName];
      this.attrs.data["id"] = table.identities.id.value - 1;
      console.log(this.attrs.data);
    }
  }

  private update(): void {
    // UPDATE ????
  }

  private delete(): void {
    // delete ????
  }

  static select(): void {
    // SELECT * FROM cities WHERE pop < 3500000 ORDER BY pop DESC
  }

  static get(): void {
    /// ????
  }

  private createTable(): void {
    const columnTable: string = ["id number autoincrement primary key"].concat(
      this.attrs.tableColumns.map((column: EntityColumn) => `${column.name} ${column.type}`)
    ).join(",");

    DB().exec(`CREATE TABLE IF NOT EXISTS ${this.attrs.tableName} (${columnTable})`);
  }

  private setDefaults(): void {
    this.attrs.tableColumns.forEach((column: EntityColumn) => {
      this.attrs.data[column.name] = column.default;
    });
  }

}
