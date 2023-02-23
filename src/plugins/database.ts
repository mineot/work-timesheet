import fs from "fs";

const dbName = "assets/db.json";
let DB: any = { tables: [] };

const Store = () => {
  fs.writeFileSync(
    dbName,
    JSON.stringify(DB)
  );
};

const Restore = () => {
  console.log(fs);
  DB = JSON.parse(fs.readFileSync(
    dbName,
    "utf8"
  ));
};

export { Restore, Store, DB };
