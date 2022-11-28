import React, {useState} from 'react';
import {useNavigate} from 'react-router';

export default function CreateEntry(){
  const [form, setForm] = useState({
    name:"",
    link:"",
    quantity:"",
    price:"",
  });

  const navigate = useNavigate();

  function updateForm(value){
    return setForm((prev) => {
      return {...prev,...value};
    });
  }

  async function onSubmitEntry(e){
    e.preventDefault();

    const newEntry = {...form};

    await fetch("/registry/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    })
    .catch(error=> {
      window.alert(error);
      return;
    });
    setForm({name:"", link:"", quantity:"",price:""});
    navigate("/registrylist");
  }
return (
   <div>
     <h3>Add Registry Item</h3>
     <form onSubmit={onSubmitEntry}>
       <div className="form-group">
         <label htmlFor="name">Item Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="link">Item Link</label>
         <input
           type="url"
           className="form-control"
           id="link"
           value={form.link}
           onChange={(e) => updateForm({ link: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="link">Quantity</label>
         <input
           type="number"
           className="form-control"
           id="quantity"
           value={form.quantity}
           onChange={(e) => updateForm({ quantity: e.target.value })}
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
             checked={form.level === "Low"}
             onChange={(e) => updateForm({ price: e.target.value })}
           />
           <label htmlFor="priceLow" className="form-check-label">low</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="priceOptions"
             id="priceMed"
             value="Medium"
             checked={form.level === "Medium"}
             onChange={(e) => updateForm({ price : e.target.value })}
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
             checked={form.level === "High"}
             onChange={(e) => updateForm({ price: e.target.value })}
           />
           <label htmlFor="priceHigh" className="form-check-label">$$$</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create Entry"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}