import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function EditGuest() {
 const [form, setForm] = useState({
    name:"",
    adress:"",
    plus:"",
    attending:"",
    guests: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
    console.log("in fetch");
     const id = params.id.toString();
     const response = await fetch(`/oneGuest/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     const result = await response.json();
     const guest = result.record;
     if (!guest) {
       window.alert(`Guest with id ${id} not found`);
       navigate("/guestlist");
       return;
     }
 
     setForm(guest);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedEntry = {
    name: form.name,
    address:form.address,
    plus:form.plus,
    attending:form.attending,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`/updateGuest/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedEntry),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/guestlist");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Guest</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="address">Address: </label>
         <input
           type="text"
           className="form-control"
           id="address"
           value={form.address}
           onChange={(e) => updateForm({ address: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="plus">plus</label>
         <input
           type="text"
           className="form-control"
           id="plus"
           value={form.plus}
           onChange={(e) => updateForm({plus: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="isAttending"
             id="yes"
             value="yes"
             checked={form.attending === "yes"}
             onChange={(e) => updateForm({ attending: e.target.value })}
           />
           <label htmlFor="yes" className="form-check-label">Yes</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="isAttending"
             id="no"
             value="no"
             checked={form.attending === "no"}
             onChange={(e) => updateForm({ attending: e.target.value })}
           />
           <label htmlFor="no" className="form-check-label">No</label>
         </div>
       </div>
       <br />
       <div className="form-group">
         <input
           type="submit"
           value="Update"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}