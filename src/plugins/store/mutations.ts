import { MutationItem, MutationTable, ParamMutationDelete, ParamMutationSave, ParamRecoverTables, State } from "./facades";
import { findItemById, findTable } from "./helpers";

export default {
  recoverTables(state: State, param: ParamRecoverTables) {
    state.tables = param.recoveredTables;
  },

  insert(state: State, param: ParamMutationSave) {
    const table: MutationTable | undefined = findTable(state, param);
    table?.items.push(param.item);
  },

  update(state: State, param: ParamMutationSave) {
    const table: MutationTable | undefined = findTable(state, param);
    const item: MutationItem | undefined = findItemById(table, { tableName: param.tableName, id: param.item.id });

    if (item) {
      item.columns = param.item.columns;
    }
  },

  delete(state: State, param: ParamMutationDelete) {
    const table: MutationTable | undefined = findTable(state, param);
    const index: number | undefined = table?.items.indexOf(param.item);

    if (table && index !== undefined && index > -1) {
      table.items.splice(index, 1);
    }
  },
};
