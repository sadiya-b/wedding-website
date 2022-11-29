import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from "react-bootstrap-icons";

const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td><a href={props.record.position}>Click Here!</a></td>
   <td>{props.record.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}>Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
    console.log("in recordList.js")
     const response = await fetch("/record");
 
     if (!response.ok) {
       const message = "An error occurred: {response.statusText}";
       //indow.alert(message);
       return;
     }
     const result = await response.json();
     const records = result.venList;
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, []);
 
 // This method will delete a record
 async function deleteRecord(id) 
 {
   await fetch(`/${id}`, 
   {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
// eslint-disable-next-line no-template-curly-in-string
 }
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Vendor List
     <Link className="btn " to="/create"><PlusCircle size={25}/> </Link> </h3>
     <table className="table table-striped" id="record" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Vendor Website/Portfolio</th>
           <th>Vendor Type</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}
