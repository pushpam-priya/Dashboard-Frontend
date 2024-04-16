import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

import './ClientDetailSection.css';
import creativecompanylogo from '../image/pngtree-creative-company-logo.png';

const ClientDetailSection = () => {

    const data = [
        { id: 1, name: 'Pepsi', division: 'Phillips'},
        { id: 2, name: 'Pepsi', division: 'Phillips'}
        
      ]; 

    return (
        <div className='client-detail'>
         <Link to={'/AssociateClient'} style={{ textDecoration: "none", color: "black"}}><div className='client-detail-section-1'>
            <ArrowBackIcon sx={{ fontSize: '24px'}} />
            <h4>Client Detail</h4>
            </div> </Link>
            <Divider /> 
            <div className='client-detail-section-2'>
                <div className="section-2-div1">
                    <img src={creativecompanylogo} alt="" />
                </div>
                <div className="section-2-div2">
                    <p>Client Name</p>
                    <h4>Division Name</h4>
                </div>
            </div>            
            <div className='client-detail-section-3'>
            <TextField
              className='text-field' 
              placeholder="Search by site name"
              InputProps={{
                startAdornment: (
                  <SearchIcon className="search-icon" />
                ),
              }}
            />
            <Link to={'/AddAssociateClient'}><button className="create-btn">Add User</button></Link>
            </div>
            <br />
            <Divider /> 
            <br />  
          <table className="table">
            <thead>
              <tr>
                <th className='tr-th'>Client ID</th>
                <th className='tr-th'>Name</th>
                <th className='tr-th'>Division</th>
                <th className='tr-th'>Action</th>
                </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={row.id} className={index % 2 !== 0 ? 'even-row row' : row}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.division}</td>
                  <td>
                    <Link to={'/EditUserClient'}><button className="edit-btn">Edit</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default ClientDetailSection;