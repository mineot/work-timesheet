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
