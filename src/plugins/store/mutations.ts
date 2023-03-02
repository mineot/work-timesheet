import { StoreConstants } from "./constants";
import { State, Table } from "./facades";

export default {
  [StoreConstants.MUTATIONS.RESTORE_DB]: (state: State, tables: Table[]) => {
    state.tables = Object.assign([], tables);
  },

  [StoreConstants.MUTATIONS.UPDATE_TABLE]: (state: State, table: Table) => {
    const index: number = state.tables.findIndex((table: Table) => table.name === table.name);

    if (index >= 0) {
      state.tables[index].rows = Object.assign([], table.rows);
    } else {
      state.tables.push(table);
    }
  }
};
