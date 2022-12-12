const express = require("express");
const recordRoutes = express.Router();

const { myDb } = require("../db/MyMongoDB.js");



recordRoutes.get("/getData", async function (req, res,next) {
  console.log("get data");
  res.json([1,2]);
});

recordRoutes.get("/record", async function (req, res,next) {
  console.log("get data");
  
 let venList;

 try{
  venList = await myDb.getRecords();
  res.status(200).json({venList, msg:"Query Successful"});
 } catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});


recordRoutes.get("/vendor/:id", async function (req, res,next) {
  console.log("getting single record id");
 let record;

 try{
  record = await myDb.getOneRecord(req);
  
  console.log(record);
  
  res.status(200).json({record, msg:"Query Successful"});
 
 } 
 catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});

// This section will help you update a record by id.
recordRoutes.post("/update/:id", async function (req, res) {
 console.log("update record ");
 let record = req;

 try{
  await myDb.updateRecord(record);

  res.status(200).json({msg:"Query Successful"});
 } catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});

recordRoutes.delete("/:id", async function(req,res,next){
  console.log("in delete function");
  try{
    const vendor = req.params.id;
    await myDb.deleteVendor(vendor);  
    res.status(200).json({msg:"Query Successful"});
  }
  catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});

recordRoutes.post("/vendor/add", async function(req,res,next){
  console.log("in add function");
  try{
    const vendor = req;
    await myDb.addVendor(vendor);  
    res.status(200).json({msg:"Query Successful"});
  }
  catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});

/*REGION: REGISTRY ROUTES*/
recordRoutes.get("/register", async function (req, res,next) {
  console.log("get data");
  
 let venList;

 try{
  venList = await myDb.getRegistry();
  res.status(200).json({venList, msg:"Query Successful"});
 } catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});


recordRoutes.get("/registryRecord/:id", async function (req, res,next) {
  console.log("getting single record id");
 let record;

 try{
  record = await myDb.getOneRegistry(req);
  
  console.log(record);
  
  res.status(200).json({record, msg:"Query Successful"});
 
 } 
 catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});

// This section will help you update a record by id.
recordRoutes.post("/updateEntry/:id", async function (req, res) {
 console.log("update record ");
 let record = req;

 try{
  await myDb.updateRegistryRecord(record);

  res.status(200).json({msg:"Query Successful"});
 } catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});

recordRoutes.delete("/registry/:id", async function(req,res,next){
  console.log("in delete function");
  try{
    const vendor = req.params.id;
    await myDb.deleteRegistry(vendor);  
    res.status(200).json({msg:"Query Successful"});
  }
  catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});

recordRoutes.post("/registry/add", async function(req,res,next){
  console.log("in add function");
  try{
    const vendor = req;
    await myDb.addRegistry(vendor);  
    res.status(200).json({msg:"Query Successful"});
  }
  catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});

/*REGION: GUEST ROUTES*/
recordRoutes.get("/guest", async function (req, res,next) {
  console.log("get guest");
  
 let venList;

 try{
  venList = await myDb.getGuest();
  res.status(200).json({venList, msg:"Query Successful"});
 } catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});


recordRoutes.get("/oneGuest/:id", async function (req, res,next) {
  console.log("getting single guest id");
 let record;

 try{
  record = await myDb.getOneGuest(req);
  
  console.log(record);
  
  res.status(200).json({record, msg:"Query Successful"});
 
 } 
 catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});

// This section will help you update a record by id.
recordRoutes.post("/updateGuest/:id", async function (req, res) {
 console.log("update guest ");
 let record = req;

 try{
  await myDb.updateGuestRecord(record);

  res.status(200).json({msg:"Query Successful"});
 } catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});

recordRoutes.delete("/guest/:id", async function(req,res,next){
  console.log("in delete function");
  try{
    const vendor = req.params.id;
    await myDb.deleteGuest(vendor);  
    res.status(200).json({msg:"Query Successful"});
  }
  catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});

recordRoutes.post("/guest/add", async function(req,res,next){
  console.log("in add guest function");
  try{
    const vendor = req;
    await myDb.addGuest(vendor);  
    res.status(200).json({msg:"Query Successful"});
  }
  catch(e){
  console.log("Error in db",e);
  res.status(300).json({
      venList: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
 }
});
module.exports = recordRoutes;