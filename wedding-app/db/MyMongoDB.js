const { MongoClient } = require("mongodb");
const { ObjectID } = require("mongodb");

function MyMongoDB() {
  console.log("load");
  const myDb = {};
  const url = process.env.MONGO_URL || "mongodb://0.0.0.0:27017";
  const DB_NAME = "wedding";
  const VENDOR_COL_NAME = "vendors";
  const REGISTRY_COL_NAME = "registry";
  const GUEST_COL_NAME = "guest";


  myDb.getRecords = async function() {
    let client;
    console.log("getRecords");

    try {
      client = new MongoClient(url);

      const list = client.db(DB_NAME).collection(VENDOR_COL_NAME);

      const query = {};
      window.alert("get records running");
      const sort = {_id : 1};

      return await list.find(query).sort(sort).toArray();
    } catch (e) {
      console.log("getRecords error", e);
      throw e;
    } finally {
      console.log("getRecords closing connection");
      await client.close();
    }
  };

  myDb.getOneRecord = async function(request) {
    let client;
    console.log("get one Record");

    try {
      client = new MongoClient(url);

      const list = client.db(DB_NAME).collection(VENDOR_COL_NAME);

      const objId = { _id: ObjectID(request.params.id) };
      console.log("get one records running");

      return await list.findOne(objId);

    } catch (e) {
      console.log("getOneRecord error", e);
      throw e;
    } finally {
      console.log("getOneRecord closing connection");
      await client.close();
    }
  };


  myDb.updateRecord = async function(record) {
    console.log("in update record");
    let client;
    try {
      client = new MongoClient(url);
      const col = client.db(DB_NAME).collection(VENDOR_COL_NAME);

      let objId = { _id: ObjectID(record.params.id) };

      return await col.updateOne(objId, {
        $set: {
          name: record.body.name,
          position: record.body.position,
          level: record.body.level,
        },
      });

    } finally {
      console.log("update record closing connection");
      await client.close();
    }
  };

  myDb.deleteVendor = async function(id) {
    console.log("delete vendors");
    let client;
    try {
      client = new MongoClient(url);
      const col = client.db(DB_NAME).collection(VENDOR_COL_NAME);

      let objId = { _id: ObjectID(id) };

      return await col.deleteOne(objId);

    } finally {
      console.log("delete record closing connection");
      await client.close();
    }

  };

  myDb.addVendor = async function(newVendor) {
    console.log("add vendors");
    let client;
    try {
      client = new MongoClient(url);

      const col = client.db(DB_NAME).collection(VENDOR_COL_NAME);

      let myobj = {
        name: newVendor.body.name,
        position: newVendor.body.position,
        level: newVendor.body.level,
      };
      return await col.insertOne(myobj);

    } finally {
      console.log("adding record closing connection");
      await client.close();
    }
  };

  /* REGION: REGISTRY METHODS*/

  myDb.getRegistry = async function() {
    let client;
    console.log("getRegistry");

    try {
      client = new MongoClient(url);

      const list = client.db(DB_NAME).collection(REGISTRY_COL_NAME);

      const query = {};
      console.log(" getRegistry running");
      return await list.find(query).toArray();
    } catch (e) {
      console.log("getRegistry error", e);
      throw e;
    } finally {
      console.log("getRegistry closing connection");
      await client.close();
    }
  };

  myDb.getOneRegistry = async function(request) {
    let client;
    console.log("get one REG Record");

    try {
      client = new MongoClient(url);

      const list = client.db(DB_NAME).collection(REGISTRY_COL_NAME);

      const objId = { _id: ObjectID(request.params.id) };
      console.log("get one records running");

      return await list.findOne(objId);

    } catch (e) {
      console.log("getOneRegistry error", e);
      throw e;
    } finally {
      console.log("getOneRegistry closing connection");
      await client.close();
    }
  };


  myDb.updateRegistryRecord = async function(record) {
    console.log("in REG update record");
    let client;
    try {
      client = new MongoClient(url);
      const col = client.db(DB_NAME).collection(REGISTRY_COL_NAME);

      let objId = { _id: ObjectID(record.params.id) };

      return await col.updateOne(objId, {
        $set: {
          name: record.body.name,
          link: record.body.link,
          quantity: record.body.quantity,
          price: record.body.price,
        },
      });

    } finally {
      console.log("update reg closing connection");
      await client.close();
    }
  };

  myDb.deleteRegistry = async function(id) {
    console.log("delete reg");
    let client;
    try {
      client = new MongoClient(url);
      const col = client.db(DB_NAME).collection(REGISTRY_COL_NAME);

      let objId = { _id: ObjectID(id) };

      return await col.deleteOne(objId);

    } finally {
      console.log("delete reg closing connection");
      await client.close();
    }

  };

  myDb.addRegistry = async function(newReg) {
    console.log("add reg");
    let client;
    try {
      client = new MongoClient(url);

      const col = client.db(DB_NAME).collection(REGISTRY_COL_NAME);

      let myobj = {
        name: newReg.body.name,
        link: newReg.body.link,
        quantity: newReg.body.quantity,
        price: newReg.body.price,
      };
      return await col.insertOne(myobj);

    } finally {
      console.log("adding reg closing connection");
      await client.close();
    }
  };


  /* REGION: GUEST LIST METHODS*/
  myDb.getGuest = async function() {
    let client;
    console.log("getGuest");

    try {
      client = new MongoClient(url);

      const list = client.db(DB_NAME).collection(GUEST_COL_NAME);

      const query = {};
      console.log(" getGuest running");
      return await list.find(query).toArray();
    } catch (e) {
      console.log("getGuest error", e);
      throw e;
    } finally {
      console.log("getGuest closing connection");
      await client.close();
    }
  };

  myDb.getOneGuest = async function(request) {
    let client;
    console.log("get one guest Record");

    try {
      client = new MongoClient(url);

      const list = client.db(DB_NAME).collection(GUEST_COL_NAME);

      const objId = { _id: ObjectID(request.params.id) };
      console.log("get one guest running");

      return await list.findOne(objId);

    } catch (e) {
      console.log("getOneGuest error", e);
      throw e;
    } finally {
      console.log("getOneGuest closing connection");
      await client.close();
    }
  };


  myDb.updateGuestRecord = async function(record) {
    console.log("in guest update record");
    let client;
    try {
      client = new MongoClient(url);
      const col = client.db(DB_NAME).collection(GUEST_COL_NAME);

      let objId = { _id: ObjectID(record.params.id) };

      return await col.updateOne(objId, {
        $set: {
          name: record.body.name,
          address: record.body.address,
          plus: record.body.plus,
          attending: record.body.attending,
        },
      });

    } finally {
      console.log("update guest closing connection");
      await client.close();
    }
  };

  myDb.deleteGuest = async function(id) {
    console.log("delete guest");
    let client;
    try {
      client = new MongoClient(url);
      const col = client.db(DB_NAME).collection(GUEST_COL_NAME);

      let objId = { _id: ObjectID(id) };

      return await col.deleteOne(objId);

    } finally {
      console.log("delete guest closing connection");
      await client.close();
    }

  };

  myDb.addGuest = async function(newGuest) {
    console.log("addGuest");
    let client;
    try {
      client = new MongoClient(url);

      const col = client.db(DB_NAME).collection(GUEST_COL_NAME);

      let myobj = {
        name: newGuest.body.name,
        address: newGuest.body.address,
        plus: newGuest.body.plus,
        attending: newGuest.body.attending,
      };
      return await col.insertOne(myobj);

    } finally {
      console.log("adding reg closing connection");
      await client.close();
    }
  };


  return myDb;
}

const myDB = MyMongoDB();
exports.myDb = myDB;