import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import AddPartSection from "../../../components/AddPartSection";

import './AddPart.css';

const AddPart = () => {
    return (
        <div className="main">
            <div className="header">
                <Header/>
            </div>
            <div className="content">
                <div className="Layout-content-section1">
                  <SideNavigation />
                </div>
                <div className="Layout-content-section2">
                  <AddPartSection name={"Add Part"} btn={"Add"}  />
                </div>
            </div>
        </div>
    );
};

export default AddPart;