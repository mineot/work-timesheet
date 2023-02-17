import alasql from "alasql";
import moment from "moment";

import { EntityModel, ColumnType } from "@model/entity.model";

const dbName = "__wtsdb";
const instance: any = {
  db: undefined,
  alaSql: undefined,
};

const InitDB = function (): void {
  const create: string[] = [];
  create.push(`CREATE LOCALSTORAGE DATABASE IF NOT EXISTS ${dbName};`);
  create.push(`ATTACH LOCALSTORAGE DATABASE ${dbName};`);
  create.push(`SET AUTOCOMMIT ON;`);
  create.push(`USE ${dbName};`);
  alasql(create.join("\n"));

  instance.alaSql = alasql;
  instance.db = instance.alaSql.Database(dbName);

  const entity: EntityModel = new EntityModel("teste", [
    { name: "texto", type: ColumnType.STRING, default: "AAA" },
    { name: "numero", type: ColumnType.NUMBER, default: 100 },
    { name: "data", type: ColumnType.DATE, default: moment.utc().toDate() },
    { name: "hora", type: ColumnType.TIME, default: moment.utc("2001-1-1T13:40", "YYYY-DD-MMTHH:mm").toDate() },
    { name: "boleano", type: ColumnType.BOOL, default: true },
  ]);

  const entity2: EntityModel = new EntityModel("teste", [
    { name: "texto", type: ColumnType.STRING, default: "DEF" },
    { name: "numero", type: ColumnType.NUMBER, default: 100 },
    { name: "data", type: ColumnType.DATE, default: new Date() },
    { name: "hora", type: ColumnType.TIME, default: moment.utc("2001-1-1T13:40", "YYYY-DD-MMTHH:mm").toDate() },
    { name: "boleano", type: ColumnType.BOOL, default: true },
  ]);

  // entity.save();
  // entity2.save();

  // entity.drop();

};

const DB = (): any => {
  return instance.db;
};

const AlaSql = (): any => {
  return instance.alaSql;
};

export { InitDB, DB, AlaSql };

