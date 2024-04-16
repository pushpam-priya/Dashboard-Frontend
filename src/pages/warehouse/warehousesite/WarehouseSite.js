import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import WarehouseSiteSection from "../../../components/WarehouseSiteSection";

import './WarehouseSite.css';


const WarehouseSite = () => {
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
          <WarehouseSiteSection />
        </div>
    </div>
</div>
  );
};

export default WarehouseSite;