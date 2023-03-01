export interface MutationColumn {
  key: string;
  value: any;
}

export interface MutationItem {
  id: string;
  columns: MutationColumn[];
}

export interface MutationTable {
  name: string;
  items: MutationItem[];
}

export interface State {
  tables: MutationTable[];
}

export interface ParamTableName {
  tableName: string;
}

export interface ParamGetById extends ParamTableName {
  id: string;
}

export interface ParamRecoverTables {
  recoveredTables: MutationTable[];
}

export interface ParamMutationSave extends ParamTableName {
  item: MutationItem;
}

export interface ParamMutationDelete extends ParamMutationSave { }

export interface Action {
  state: State;
  commit(name: string, param: any): void;
  dispatch(name: string, param?: any): void;
}