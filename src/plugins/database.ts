import initSqlJs from "sql.js";
import "sql.js/dist/sql-wasm";

let DB: any = undefined;

const InitDB = async function () {
  const SQL = await initSqlJs({
    locateFile: file => `assets/${file}`
  });

  DB = new SQL.Database();
};

export { InitDB, DB };
