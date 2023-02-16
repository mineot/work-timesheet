// alasql('CREATE TABLE IF NOT EXISTS todo (id INT AUTOINCREMENT PRIMARY KEY, text STRING)');

import alasql from "alasql";

const dbName = "__wtsdb";

const InitDB = function (): boolean {
  const create: string[] = [];
  create.push(`CREATE LOCALSTORAGE DATABASE IF NOT EXISTS ${dbName};`);
  create.push(`ATTACH LOCALSTORAGE DATABASE ${dbName};`);
  create.push(`USE ${dbName};`);
  alasql(create.join("\n"));
  return false;
};

export default InitDB;
