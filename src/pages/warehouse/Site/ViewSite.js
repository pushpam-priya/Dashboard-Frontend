import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import ViewSiteSection from "../../../components/ViewSiteSection";

import './ViewSite.css';

const ViewSite = () => {
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
                  <ViewSiteSection name={"View Site"} />
                </div>
            </div>
        </div>
    );
};

export default ViewSite;