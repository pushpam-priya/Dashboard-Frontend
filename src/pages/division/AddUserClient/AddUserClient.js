import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import AddUserClientSection from "../../../components/AddUserClientSection";

import './AddUserClient.css';
const AddUserClient = () => {
 
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
                  <AddUserClientSection name={"Add Users"} btn={"Add"} />
                </div>
            </div>
        </div>
    );
};

export default AddUserClient;