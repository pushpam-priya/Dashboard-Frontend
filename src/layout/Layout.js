import React from "react";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigationBar";
import DashBoardSection from "../components/DashboardSection";

import './Layout.css';



const Layout = () => {

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
                  <DashBoardSection name={'Add Associate'} btn1={'Add'} />
                </div>
            </div>
        </div>
    );
};

export default Layout;
