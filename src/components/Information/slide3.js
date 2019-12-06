import React from 'react';
import './Slides.css';
import { Link } from "react-router-dom";

const Slide3 = () => {
  return(
    <div className="Slide3"> 
      <hr />
      <Link className="footer-home" to="/home"> Home </Link>
    </div>    
    
  );
}

export default Slide3;