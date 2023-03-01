import { buildTableName, dbTables, delay, findTable } from "./helpers";
import { Action, ParamMutationDelete, ParamMutationSave, ParamRecoverTables, ParamTable, Table } from "./facades";

export default {
  initDB: (action: Action): void => {
    let tables: Table[] = [];

    dbTables.forEach((table: string) => {
      const tableName: string = buildTableName(table);
      const jsonData: string | null = localStorage.getItem(tableName);

      if (jsonData) {
        const parsedData: Table = JSON.parse(jsonData);
        tables.push(parsedData);
      }
    });

    const paramRecoverTables: ParamRecoverTables = { tables };
    action.commit("recoverTables", paramRecoverTables);

    action.dispatch("autoStoreDB");
  },

  storeTable(action: Action, param: ParamTable) {
    let table: Table | undefined = findTable(action.state, param);

    if (!table) {
      table = { name: param.tableName, rows: [] };
    }

    const jsonData: string = JSON.stringify(table);
    localStorage.setItem(buildTableName(param.tableName), jsonData);
  },

  storeDB: (action: Action) => {
    dbTables.forEach((tableName: string) => {
      action.dispatch("storeTable", { tableName });
    });
  },

  autoStoreDB: (action: Action) => {
    setTimeout(() => {
      action.dispatch("storeDB");
      action.dispatch("autoStoreDB");
    }, delay);
  },

  save: (action: Action, param: ParamMutationSave) => {
    const mutation = param.tableRow.id ? "update" : "insert";
    action.commit(mutation, param);
  },

  delete: (action: Action, param: ParamMutationDelete) => {
    action.commit("delete", param);
  },
};