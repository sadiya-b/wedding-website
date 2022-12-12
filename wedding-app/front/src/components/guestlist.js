import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from 'react-bootstrap-icons';

const Guest = (props) => (
 <tr>
   <td>{props.guest.name}</td>
   <td>{props.guest.address}</td>
   <td>{props.guest.plus}</td>
   <td>{props.guest.attending}</td>
   <td>
     <Link className="btn btn-link" to={`/editGuest/${props.guest._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteGuest(props.guest._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function GuestList() {
 const [guest, setGuest] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getGuests() {
     const response = await fetch("/guest");

     console.log(response);
 
     if (!response.ok) {
       const message = "An error occurred: "+ response.statusText;
       window.alert(message);
       return;
     }
 
     const result = await response.json();
     const guest = result.venList;
     setGuest(guest);
   }
 
   getGuests();
 
   return;
 }, [guest.length]);
 
 // This method will delete a record
 async function deleteGuest(id) {
   await fetch(`/guest/${id}`, {
     method: "DELETE"
   });
 
   const newGuests = guest.filter((el) => el._id !== id);
   setGuest(newGuests);
 }
 
 // This method will map out the Entry on the table
 function guestList() {
   return guest.map((guest) => {
     return (
       <Guest
         guest={guest}
         deleteGuest={() => deleteGuest(guest._id)}
         key={guest._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Guest List
     <Link className="btn " to="/createGuest"><PlusCircle size={25}/> </Link> </h3>
     <table className="table table-striped" id="record" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Address</th>
           <th>Additonal Guests</th>
           <th>Attending</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{guestList()}</tbody>
     </table>
   </div>
 );
}