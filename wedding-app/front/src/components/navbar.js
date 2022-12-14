import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import logo from "../utils/w.gif";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light">
       <NavLink className="navbar-brand" to="/">
       <img className="title-logo" src={logo} alt="logo"/>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
            <NavLink className="nav-link" to="/recordlist">
              Vendors
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/registrylist">
               Registry
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/guestlist">
               Guest List
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
     <hr/>
   </div>
  );
}