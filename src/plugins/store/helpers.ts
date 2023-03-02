import { Table } from "./facades";

const dbName = "wtsdb";
const dbTableNames = "wtsdb_table_names";
const autoStoreDelay = 60000;
const updateTableDelay = 1000;

const composeName = (tableName: string): string => {
  return `${dbName}->${tableName}`;
};

const store = (tables: Table[]): void => {
  const tableNames: string[] = [];

  tables.forEach((table: Table) => {
    tableNames.push(table.name);
    localStorage.setItem(composeName(table.name), JSON.stringify(table));
  });

  localStorage.setItem(dbTableNames, JSON.stringify(tableNames));
};

const restore = (): Table[] => {
  const jsonNames: string | null = localStorage.getItem(dbTableNames);

  if (jsonNames === null) {
    return [];
  }

  const tableNames: string[] = JSON.parse(jsonNames);

  if (tableNames.length === 0) {
    return [];
  }

  const tables: Table[] = [];

  tableNames.forEach((tableName: string) => {
    const json: string | null = localStorage.getItem(composeName(tableName));

    if (json !== null) {
      tables.push(JSON.parse(json));
    }
  });

  return tables;
};

export { store, restore, autoStoreDelay, updateTableDelay }; 