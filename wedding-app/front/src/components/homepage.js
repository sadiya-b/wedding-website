import React from "react";
import regPic from "../utils/gifts.avif"
import vendor from "../utils/vendors.avif"
import guests from "../utils/guests.avif"
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

function HomePage() {

  return (
    <div className="container">
    <div className="innerContainer">
      <h1>For the days along the way... Your wedding starts here</h1>
      <h4> With so much to do before the wedding, see how Union eases planning for your occasion.
      </h4>
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
