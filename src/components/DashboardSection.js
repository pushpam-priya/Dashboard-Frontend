import React, { useState, useEffect } from "react";
import SideNavigationBar from "../components/SideNavigationBar";
import CardBox from "../components/CardBox";
import BarGraph from "../components/BarGraph";
import graph from "../image/graph.jpeg";
import './DashboardSection.css';

const DashboardSection = () => {

    const data = [
        { label: 'Division', value: 4 },
        { label: 'Warehouses', value: 5 },
        { label: 'Client', value: 5 },
        { label: 'Parts', value: 55 },
        { label: 'Shipments', value: 55 },
        { label: 'Technicians', value: 75 },
      ];

    return (
            <div className="content-section">
                {/* <div className="side-bar">
                    <SideNavigationBar />
                </div> */}
                {/* <div className="dashboard-content"> */}
                    <div className="card-section">
                        <div className="cards"> 
                           <CardBox class='card' color={'#C5004E'} title={"Total Divisions"} count={"4"} background={"linear-gradient(180deg, #FF77AD 22.99%, #FEC3D2 113.52%)"} />
                           <CardBox class='card' color={'#006C58'} title={"Total Warehouses"} count={"5"} background={"linear-gradient(180deg, #67C2B1 22.99%, #9CE9F3 113.52%)"} />
                           <CardBox class='card' color={'#7F4884'} title={"Total Clients"} count={"5"} background={"linear-gradient(180deg, #B08AB3 22.99%, #D4B0D4 113.52%)"} />
                           <CardBox class='card' color={'#746E6E'} title={"Total Parts"} count={"55"} background={"linear-gradient(180deg, #A6A6A6 22.99%, #D7D7D7 113.52%)"} />
                           <CardBox class='card' color={'#A74B38'} title={"Total Shipments"} count={"55"} background={"linear-gradient(180deg, #FB947F 22.99%, #FFD3B7 113.52%)"} />
                           <CardBox class='card' color={'#AC760B'} title={"Total Technicians"} count={"75"} background={"linear-gradient(180deg, #F9C255 22.99%, #F6E966 113.52%)"} />

                        </div>
                        
                    </div>
                    <div className="bar-section">
                        <h4 className="bar-heading">Bar Graph Representation of above</h4>
                        <BarGraph className="bargraph" data={data} />
                        {/* <img className="map-img" src={graph} alt="" /> */}
                    </div>
                {/* </div> */}
             
            </div>
    );
};

export default DashboardSection;