import { buildTableName, dbTables, delay, findTable, uuid } from "./helpers";
import { Action, MutationTable, ParamMutationDelete, ParamMutationSave, ParamRecoverTables, ParamTableName } from "./facades";

export default {
  initDB: (action: Action): void => {
    let tables: MutationTable[] = [];

    dbTables.forEach((table: string) => {
      const tableName: string = buildTableName(table);
      const jsonData: string | null = localStorage.getItem(tableName);

      if (jsonData) {
        const parsedData: MutationTable = JSON.parse(jsonData);
        tables.push(parsedData);
      }
    });

    const paramRecoverTables: ParamRecoverTables = { recoveredTables: tables };
    action.commit("recoverTables", paramRecoverTables);

    action.dispatch("autoStoreDB");
  },

  storeTable(action: Action, param: ParamTableName) {
    let table: MutationTable | undefined = findTable(action.state, param);

    if (!table) {
      table = { name: param.tableName, items: [] };
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
    let mutation = "update";

    if (param.item.id === undefined) {
      mutation = "insert";
      param.item.id = uuid();
    }

    action.commit(mutation, param);
  },

  delete: (action: Action, param: ParamMutationDelete) => {
    action.commit("delete", param);
  },
};