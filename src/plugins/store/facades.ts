export interface TableColumn {
  key: string;
  value: any;
}

export interface TableRow {
  id: string | undefined;
  columns: TableColumn[];
}

export interface Table {
  name: string;
  rows: TableRow[];
}

export interface State {
  tables: Table[];
}

export interface ParamTable {
  tableName: string;
}

export interface ParamGetRowById extends ParamTable {
  rowId: string | undefined;
}

export interface ParamRecoverTables {
  tables: Table[];
}

export interface ParamMutationSave extends ParamTable {
  tableRow: TableRow;
}

export interface ParamMutationDelete extends ParamMutationSave { }

export interface Action {
  state: State;
  commit(name: string, param: any): void;
  dispatch(name: string, param?: any): void;
}