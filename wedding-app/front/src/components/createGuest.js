import React, {useState} from 'react';
import {useNavigate} from 'react-router';

export default function CreateGuest(){
  const [form, setForm] = useState({
    name:"",
    adress:"",
    plus:"",
    attending:"",
  });

  const navigate = useNavigate();

  function updateForm(value){
    return setForm((prev) => {
      return {...prev,...value};
    });
  }

  async function onSubmitEntry(e){
    e.preventDefault();

    const newGuest = {...form};

    await fetch("/guest/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGuest),
    })
    .catch(error=> {
      window.alert(error);
      return;
    });
    setForm({name:"", address:"", plus:"",price:""});
    navigate("/guestlist");
  }
return (
   <div>
     <h3>Add Guest Name</h3>
     <form onSubmit={onSubmitEntry}>
       <div className="form-group">
         <label htmlFor="name">Guest Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="address">Address</label>
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
           type="number"
           className="form-control"
           id="plus"
           value={form.plus}
           onChange={(e) => updateForm({ plus: e.target.value })}
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
             checked={form.level === "yes"}
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
             value="No"
             checked={form.level === "No"}
             onChange={(e) => updateForm({ attending : e.target.value })}
           />
           <label htmlFor="no" className="form-check-label">No</label>
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