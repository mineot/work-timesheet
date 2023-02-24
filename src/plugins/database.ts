interface DBData {
  [teste: string]: any[];
}

const delay = 60000;
const separator = "->";
const dbName = "wtsdb";
const dbTables = ["teste"];
const DB: DBData = {
  teste: []
};

const InitDB = (): void => {
  dbTables.forEach((table: string) => {
    const data: string | null = localStorage.getItem(`${dbName}${separator}${table}`);
    DB[table] = data ? JSON.parse(data) : [];
  });

  AutoStoreDB();
};

const StoreDB = (): void => {
  dbTables.forEach((table: string) => {
    const data: string = JSON.stringify(DB[table]);
    localStorage.setItem(`${dbName}${separator}${table}`, data);
  });
};

const StoreTable = (tableName: string): void => {
  const data: string = JSON.stringify(DB[tableName]);
  localStorage.setItem(`${dbName}${separator}${tableName}`, data);
};

const AutoStoreDB = (): void => {
  setTimeout(() => {
    StoreDB();
    AutoStoreDB();
  }, delay);
};

export { InitDB, StoreDB, StoreTable, AutoStoreDB, DB };
