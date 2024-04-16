import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './ViewSiteSection.css';

const ViewSiteSection = ({name}) => {

    return (
        <div className='main'>
            <Link to={'/WarehouseSite'} style={{ textDecoration: 'none'}}><div className="arrow-section">
                <ArrowBackIcon sx={{ fontSize: '24px', color: "black" }} />
                <h4>{name}</h4>
            </div></Link>
            <hr className='hr' />
            <div className="detail-section">
                <div className="detail-section-div">
                    <div className="detail-section-subdiv">
                        <h5>Name</h5>
                        <h6>Warehouse Name</h6>
                    </div>
                    <div className="detail-section-subdiv subdiv2">
                        <h5>MainWarehouse</h5>
                        <h6>No</h6>
                    </div>
                </div>
                <div className="detail-section-div">
                    <div className="detail-section-subdiv">
                        <h5>Phone Number</h5>
                        <h6>8450983457</h6>
                    </div>
                    <div className="detail-section-subdiv subdiv2">
                        <h5>Description</h5>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean euismod bibendum laoreet.
                        </h6>
                    </div>
                </div>
                <div className="detail-section-div">
                    <div className="detail-section-subdiv">
                        <h5>Division</h5>
                        <h6>Division 1</h6>
                    </div>
                </div>
                <div className="detail-section-div">
                    <div className="detail-section-subdiv">
                        <h5>Address</h5>
                        <h6>169th St
                            Bayside, NY 11355 United States
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ViewSiteSection;