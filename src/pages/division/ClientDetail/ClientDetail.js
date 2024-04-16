import React from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import ClientDetailSection from "../../../components/ClientDetailSection";

import './ClientDetail.css';

const ClientDetail = () => {
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
                  <ClientDetailSection />
                </div>
            </div>
        </div>
    );
}

export default ClientDetail;