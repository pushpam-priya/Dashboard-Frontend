import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import SiteSection from "../../../components/SiteSection";

import './Site.css';

const UpdateSite = () => {

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
                  <SiteSection name={"Update Site"} btn={'Update'} />
                </div>
            </div>
        </div>
    );
};

export default UpdateSite;