import React from "react";
import Header from "../../components/Header";
import './Dashboard.css';
import DashboardSection from "../../components/DashboardSection";
import SideNavigation from "../../components/SideNavigationBar";

const Dashboard = () => {

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
                  <DashboardSection />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

