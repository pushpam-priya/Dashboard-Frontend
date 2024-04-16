import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import AddAssociateClientSection from "../../../components/AddAssociateClientSection";

import './AddAssociateClient.css';

const AddAssociateClient = () => {
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
                  <AddAssociateClientSection name={'Add Associate Client'} btn2={'Add'} />
                </div>
            </div>
        </div>
    );
};

export default AddAssociateClient;