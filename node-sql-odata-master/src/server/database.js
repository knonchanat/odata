import sql from "mssql";

import dbConfig from "./dbConfig";

class Database {
  connection = null;

  constructor() {
    // this.connection = new Connection(dbConfig); // For connection based on tedious

    return new Promise(async (resolve, reject) => {
      try {
        this.connection = await sql.connect(dbConfig);
      } catch (ex) {
        return reject(ex);
      }
      resolve(this);
    });
  }
}

export default Database;
