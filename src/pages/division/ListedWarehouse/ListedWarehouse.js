import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import ListedWarehouseSection from "../../../components/ListedWarehouseSection";

import './ListedWarehouse.css';

const ListedWarehouse = () => {
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
                  <ListedWarehouseSection />
                </div>
            </div>
        </div>
    );
};

export default ListedWarehouse;