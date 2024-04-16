import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import SideNavigation from "../../../components/SideNavigationBar";
import CreateDivisionSection from "../../../components/CreateDivisionSection";
import axios from "axios";


import './CreateDivision.css';

const CreateDivision = () => {

  const [mainWarehouses, setMainWarehouses] = useState([]);

  useEffect(() => {
    fetchMainWarehouses();
  }, []);

  const fetchMainWarehouses = async () => {
    try {
      const response = await axios.get('http://localhost:5003/api/warehouse/main');
      setMainWarehouses(response.data);
    } catch (error) {
      console.error('Error fetching main warehouses:', error);
      // Handle error scenarios
    }
  };


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
                  <CreateDivisionSection name={"Add Division"} btn1={"Cancel"} btn2={"Add"} mainWarehouses={mainWarehouses} />
                </div>
            </div>
        </div>
  );
}

export default CreateDivision;