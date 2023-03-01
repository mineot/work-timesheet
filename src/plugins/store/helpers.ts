import { v4 as uuid } from "uuid";
import { MutationItem, MutationTable, ParamGetById, ParamTableName, State } from "./facades";

const dbTables = ["teste"];
const dbName = "wtsdb";
const delay = 60000;

const buildTableName = (tableName: string): string => {
  return `${dbName}->${tableName}`;
};

function findTable(state: State, param: ParamTableName): MutationTable | undefined {
  return state.tables.find((el: MutationTable) => el.name == param.tableName);
}

function findItemById(table: MutationTable | undefined, param: ParamGetById): MutationItem | undefined {
  return table?.items.find((el: MutationItem) => el.id = param.id);
}

export { dbTables, delay, uuid, buildTableName, findTable, findItemById };