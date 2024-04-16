import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import AssociateClientSection from "../../../components/AssociateClientSection";

import './AssociateClient.css';

const AssociateClient = () => {

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
              <AssociateClientSection />
            </div>
        </div>
    </div>
);
};

export default AssociateClient;