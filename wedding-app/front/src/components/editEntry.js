import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function EditEntry() {
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
     const response = await fetch(`/registryRecord/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     const result = await response.json();
     const entry = result.record;
     if (!entry) {
       window.alert(`Entry with id ${id} not found`);
       navigate("/registrylist");
       return;
     }
 
     setForm(entry);
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
    link:form.link,
    quantity:form.quantity,
    price:form.price,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`/updateEntry/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedEntry),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/registrylist");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Entry</h3>
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
         <label htmlFor="link">Link: </label>
         <input
           type="text"
           className="form-control"
           id="link"
           value={form.link}
           onChange={(e) => updateForm({ link: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="quantity">quantity</label>
         <input
           type="text"
           className="form-control"
           id="quantity"
           value={form.quantity}
           onChange={(e) => updateForm({quantity: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="priceOptions"
             id="priceLow"
             value="Low"
             checked={form.price === "Low"}
             onChange={(e) => updateForm({ price: e.target.value })}
           />
           <label htmlFor="priceLow" className="form-check-label">$</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="priceOptions"
             id="priceMed"
             value="Medium"
             checked={form.price === "Medium"}
             onChange={(e) => updateForm({ price: e.target.value })}
           />
           <label htmlFor="priceMed" className="form-check-label">$$</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="priceOptions"
             id="priceHigh"
             value="High"
             checked={form.price === "High"}
             onChange={(e) => updateForm({ price: e.target.value })}
           />
           <label htmlFor="priceHigh" className="form-check-label">$$$</label>
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