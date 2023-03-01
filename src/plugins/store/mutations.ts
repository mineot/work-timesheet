import { ParamMutationDelete, ParamMutationSave, ParamRecoverTables, State, Table, TableRow } from "./facades";
import { findRow, findTable, uuid } from "./helpers";

export default {
  recoverTables(state: State, param: ParamRecoverTables) {
    state.tables = param.tables;
  },

  insert(state: State, param: ParamMutationSave) {
    const table: Table | undefined = findTable(state, param);
    const newRow: TableRow = { id: uuid(), columns: param.tableRow.columns };
    table?.rows.push(newRow);
  },

  update(state: State, param: ParamMutationSave) {
    const table: Table | undefined = findTable(state, param);
    const row: TableRow | undefined = findRow(table, { tableName: param.tableName, rowId: param.tableRow.id });

    if (row) {
      row.columns = param.tableRow.columns;
    }
  },

  delete(state: State, param: ParamMutationDelete) {
    const table: Table | undefined = findTable(state, param);
    const index: number | undefined = table?.rows.indexOf(param.tableRow);

    if (table && index !== undefined && index > -1) {
      table.rows.splice(index, 1);
    }
  },
};
