import React from "react";
import regPic from "../utils/registry.jpg"
import vendor from "../utils/vendors.png"
import guests from "../utils/guests.jpg"
import { useEffect } from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

function HomePage() {

  useEffect(() => {
    async function reloadData() {
      const data = await (await fetch("/getData")).json();
      console.log("got data", data);
    }

    reloadData();
  }, []);

  return (
    <div className="container">
    <div className="innerContainer">
      <h1>For the days along the way... Your wedding starts here</h1>
    </div>
    <div className="row1">
      <div className="text">Register for gifts you actually want 
        <Link id="browse" to="/registrylist"><Icon.ArrowRight/></Link>
      </div>
      <div className="image">
        <img src={regPic} alt="registry" />
      </div>
    </div>
    <div className="row1">
      <div className="text"> Streamline your search for Vendors
      <Link id="browse" to="/recordlist"><Icon.ArrowRight/> </Link>
      </div>
      <div className="image">
        <img src={vendor} alt="vendors" />
      </div>
    </div>
    <div className="row1">
      <div className="text"> Meet Your Guest List Manager
        <Link id="browse" to="/recordlist"><Icon.ArrowRight/></Link>
      </div>
      <div className="image">
        <img src={guests} alt="vendors" />
      </div>
    </div>
  </div>
  );
}

export default HomePage;
