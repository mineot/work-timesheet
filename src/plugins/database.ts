const initSqlJs = require("sql.js");

let DB: any = undefined;

const InitDB = async function () {
  const SQL = await initSqlJs({
    locateFile: () => "assets/db.sqlite"
  });

  DB = new SQL.Database();
};

export { InitDB, DB };
