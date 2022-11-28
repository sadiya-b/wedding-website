import express from "express";
const recordRoutes = express.Router;

import {myDb} from "..db/MyMongoDB.js";

recordRoutes.route("/record").get(function (req, res) {
 let db_connect = dbo.getDb(dbName);
 db_connect
   .collection(colName)
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});


 export default recordRoutes;
