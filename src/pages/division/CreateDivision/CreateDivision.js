import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import CreateDivisionSection from "../../../components/CreateDivisionSection";

import './CreateDivision.css';

const CreateDivision = () => {

  return(
    <div className="main">
            <div className="header">
                <Header/>
            </div>
            <div className="content">
                <div className="Layout-content-section1">
                  <SideNavigation />
                </div>
                <div className="Layout-content-section2">
                  <CreateDivisionSection name={"Add Division"} btn1={"Cancel"} btn2={"Add"} />
                </div>
            </div>
        </div>
  );
}

export default CreateDivision;