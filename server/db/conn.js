let mongodb = require('mongodb');
//import { MongoClient } from "mongodb";
/*import { ObjectId } from "mongodb";*/

const MongoClient = require('mongodb').MongoClient;
const mongoURL = process.env.MONGO_URL || "mongodb://0.0.0.0:27017";

const client = new MongoClient(mongoURL);
const DB_NAME = "wedding";

var _db;

module.exports = {
  connectToServer: function(callback){
    client.connect(function(err,db) {
      //verify db object
      if(db){
        _db = db.db(DB_NAME);
        console.log("successfully connected to mongodb");
      }
      return callback(err);
    });
  },
  getDb: function(){
    return _db;
  },
};