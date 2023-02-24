const separator = "->";
const dbName = "wtsdb";
const dbTables = ["teste"];
const DB = {
  teste: undefined
};

const InitDB = () => {
  dbTables.forEach((table: string) => {
    const data: string | null = localStorage.getItem(`${dbName}${separator}${table}`);
    DB[table] = data ? JSON.parse(data) : [];
  });
};

const StoreDB = () => {
  dbTables.forEach((table: string) => {
    const data: string = JSON.stringify(DB[table]);
    localStorage.setItem(`${dbName}${separator}${table}`, data);
  });
};

export { InitDB, StoreDB, DB };
