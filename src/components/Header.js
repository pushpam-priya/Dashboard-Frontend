import React from "react";
import './Header.css';
import Logo from "../image/image 2logo-img.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <div className="img-div">
          <Link
           to={"/Dashboard"}
           style={{ textDecoration: "none", color: "black" }}
          >
            <img className="img" src={Logo} alt="" />
          </Link>
        </div>
    </div>
  );
};

export default Header;





