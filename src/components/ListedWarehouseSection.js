import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';


import './ListedWarehouseSection.css';

const ListedWarehouseSection = () => {

  const data = [
    { id: 1, site: '169th St, Bayside, NY', warehouse: 'No', 'date': '10-10-2023, 10:30 AM' },
    { id: 2, site: 'Main Warehouse', warehouse: 'No', date: '10-10-2023, 10:30 AM' }, 
    { id: 3, site: '169th St, Bayside, NY', warehouse: 'No', 'date': '10-10-2023, 10:30 AM' },
    { id: 4, site: 'Main Warehouse', warehouse: 'No', date: '10-10-2023, 10:30 AM' },
    { id: 5, site: '169th St, Bayside, NY', warehouse: 'No', 'date': '10-10-2023, 10:30 AM' },
    { id: 6, site: 'Main Warehouse', warehouse: 'No', date: '10-10-2023, 10:30 AM' },
    { id: 7, site: '169th St, Bayside, NY', warehouse: 'No', 'date': '10-10-2023, 10:30 AM' },
    { id: 8, site: 'Main Warehouse', warehouse: 'No', date: '10-10-2023, 10:30 AM' },
    { id: 9, site: '169th St, Bayside, NY', warehouse: 'No', 'date': '10-10-2023, 10:30 AM' },
    { id: 10, site: 'Main Warehouse', warehouse: 'No', date: '10-10-2023, 10:30 AM' },
  ];

  return (
    <div className='division-Detail'>
      <div className='division-Detail-section-1'>
        <div className='division-Detail-section-1-div1'>
          <Link to={'/AssociateClient'} style={{ textDecoration: "none"}}><div className='associate-client'>Associate Client</div></Link>
          <Link to={'/ListedWarehouse'} style={{ textDecoration: "none"}}><div className='listed-warehouse' style={{backgroundColor: 'White', color: '#f7a43c', padding: '4px',  fontWeight: '500'}}>Listed Warehouse</div></Link>
          <Link to={'/DivisionUsers'} style={{ textDecoration: "none"}}><div className='division-users'>Division Users</div></Link>
        </div>
        <Link to={'/DivisionManagement'} style={{textDecoration: 'none', color: "black"}}><div className='division-Detail-section-1-div2'>
        <ArrowBackIcon sx={{ fontSize: '24px'}} />
        <h4>Division Detail Screen</h4>
        </div></Link>
        </div> 
        <Divider /> 
        <div className='division-Detail-section-2'>
        <TextField
              className='text-field' 
              placeholder="Search by site name"
              InputProps={{
                startAdornment: (
                  <SearchIcon className="search-icon" />
                ),
              }}
            />
        </div> 
        <br />
        <Divider /> 
        <br />  
      <table className="table">
        <thead>
          <tr>
            <th className='tr-th-listed'>Warehouse ID</th>
            <th className='tr-th-listed'>Site</th>
            <th className='tr-th-listed'>Main Warehouse</th>
            <th className='tr-th-listed'>Listed On Date & Time</th>
            <th className='tr-th-listed'>Action</th>
            </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id} className={index % 2 !== 0 ? 'even-row row' : row}>
              <td>{row.id}</td>
              <td>{row.site}</td>
              <td>{row.warehouse}</td>
              <td>{row.date}</td>
              <td>
              <Link to={'/ClientDetail'} style={{ textDecoration: "none"}}><button className="view-btn">View</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListedWarehouseSection;