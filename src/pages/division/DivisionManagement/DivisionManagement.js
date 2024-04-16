import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import DivisionManagementSection from "../../../components/DivisionManagementSection";
import './DivisionManagement.css';


const DivisionManagement = () => {

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
                 <DivisionManagementSection />
                </div>
            </div>
        </div>
  );
};

export default DivisionManagement;