import { v4 as uuid } from "uuid";
import { ParamGetRowById, ParamTable, State, Table, TableRow } from "./facades";

const dbTables = ["teste"];
const dbName = "wtsdb";
const delay = 60000;

const buildTableName = (tableName: string): string => {
  return `${dbName}->${tableName}`;
};

function findTable(state: State, param: ParamTable): Table | undefined {
  return state.tables.find((el: Table) => el.name == param.tableName);
}

function findRow(table: Table | undefined, param: ParamGetRowById): TableRow | undefined {
  return table?.rows.find((el: TableRow) => el.id = param.rowId);
}

export { dbTables, delay, uuid, buildTableName, findTable, findRow };