import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import PartsSection from "../../../components/PartsSection";

import './Parts.css';

const Parts = () => {

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
          <PartsSection />
        </div>
    </div>
</div>
  );
};

export default Parts;