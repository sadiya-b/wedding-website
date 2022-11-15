import React, {useState} from 'react';
import {useNavigate} from 'react-router';

export default function Create(){
  const [form, setForm] = useState({
    name:"",
    positon:"",
    level:"",
  });

  const navigate = useNavigate();

  function updateForm(value){
    return setForm((prev) => {
      return {...prev,...value};
    });
  }

  async function onSubmit(e){
    e.preventDefault();

    const newPerson = {...form};

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error=> {
      window.alert(error);
      return;
    });
    setForm({name:"", positon:"", level:""});
    navigate("/");
  }
return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Vendor Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Link</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Planner"
             checked={form.level === "Planner"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Planner</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Caterer"
             checked={form.level === "Caterer"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Caterer</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Photographer"
             checked={form.level === "Photographer"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">Photographer</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create Vendor"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}