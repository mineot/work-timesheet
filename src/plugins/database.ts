import "sql.js/dist/sql-wasm";
import initSqlJs from "sql.js";
let DB = undefined;

const InitDB = async () => {
  const SQL = await initSqlJs({
    locateFile: () => "assets/db.sqlite"
  });

  DB = new SQL.Database();
};

export { InitDB, DB };
