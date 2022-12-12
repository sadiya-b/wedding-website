import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from 'react-bootstrap-icons';

const Entry = (props) => (
 <tr>
   <td>{props.entry.name}</td>
   <td><a href={props.entry.link}>Click Here!</a></td>
   <td>{props.entry.quantity}</td>
   <td>{props.entry.price}</td>
   <td>
     <Link to={`/editEntry/${props.entry._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteEntry(props.entry._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RegistryList() {
 const [entry, setEntry] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getEntry() {
     const response = await fetch("/register");
 
     if (!response.ok) {
       const message = "An error occurred: {response.statusText}";
       //window.alert(message);
       return;
     }
 
     const result = await response.json();
     const entry = result.venList;
     setEntry(entry);
   }
 
   getEntry();
 
   return;
 }, [entry.length]);
 
 // This method will delete a record
 async function deleteEntry(id) {
   await fetch(`/registry/${id}`, {
     method: "DELETE"
   });
 
   const newEntries = entry.filter((el) => el._id !== id);
   setEntry(newEntries);
 }
 
 // This method will map out the Entry on the table
 function registryList() {
   return entry.map((entry) => {
     return (
       <Entry
         entry={entry}
         deleteEntry={() => deleteEntry(entry._id)}
         key={entry._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Registry List
     <Link className="btn " to="/createEntry"><PlusCircle size={25}/></Link> </h3>
     <table className="table table-striped" id="record" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Link</th>
           <th>Quantity</th>
           <th>Price</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{registryList()}</tbody>
     </table>
   </div>
 );
}