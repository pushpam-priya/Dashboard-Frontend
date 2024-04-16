import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import DivisionUsersSection from "../../../components/DivisionUsersSection";

import './DivisionUsers.css';

const DivisionUsers = () => {
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
                  <DivisionUsersSection />
                </div>
            </div>
        </div>
    );
};

export default DivisionUsers;