import { ParamGetRowById, ParamTable, State, Table, TableRow } from "./facades";
import { findRow, findTable } from "./helpers";

export default {
  getTable: (state: State) => (param: ParamTable): Table | undefined => {
    return findTable(state, param);
  },

  get: (state: State) => (param: ParamGetRowById): TableRow | undefined => {
    const table: Table | undefined = findTable(state, param);
    return findRow(table, param);
  },
};
