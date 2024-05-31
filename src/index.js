// import connectToDB from "./utils/database.mjs";
// import * as db from "./utils/database.mjs";
import { connectToDB } from "./utils/database.mjs";
import { dbType } from "./utils/database.mjs";
import {getDataFromAPI} from "./utils/api.cjs";

connectToDB("db_ecommerce");
console.log(dbType);
// db.disconnectDB();

getDataFromAPI();
