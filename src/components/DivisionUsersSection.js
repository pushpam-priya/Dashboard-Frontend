import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';


import './DivisionUsersSection.css';

const DivisionUsersSection = () => {

  const data = [
    { id: 1, name: 'Pepsi', division: 'Phillips' },
    { id: 2, name: 'Amazon', division: 'Phillips' },
    { id: 3, name: 'Pepsi', division: 'Phillips' },
    { id: 4, name: 'Amazon', division: 'Phillips' },
    { id: 5, name: 'Pepsi', division: 'Phillips' },
    { id: 6, name: 'Amazon', division: 'Phillips' },
    { id: 7, name: 'Pepsi', division: 'Phillips' },
    { id: 8, name: 'Amazon', division: 'Phillips' },
    { id: 9, name: 'Pepsi', division: 'Phillips' },
    { id: 10, name: 'Amazon', division: 'Phillips' },

    
  ];

  return (
    <div className='division-Detail'>
      <div className='division-Detail-section-1'>
        <div className='division-Detail-section-1-div1'>
          <Link to={'/AssociateClient'} style={{ textDecoration: "none"}}><div className='associate-client'>Associate Client</div></Link>
          <Link to={'/ListedWarehouse'} style={{ textDecoration: "none"}}><div className='listed-warehouse'>Listed Warehouse</div></Link>
          <Link to={'/DivisionUsers'} style={{ textDecoration: "none"}}><div className='division-users' style={{backgroundColor: 'White', color: '#f7a43c', padding: '4px', fontWeight: '500'}}>Division Users</div></Link>
        </div>
        <Link to={'/DivisionManagement'} style={{textDecoration: 'none', color: "black"}}><div className='division-Detail-section-1-div2'>
        <ArrowBackIcon sx={{ fontSize: '24px'}} />
        <h4>Division Detail Screen</h4>
        </div></Link>
        </div> 
        <Divider /> 
        <div className='division-Detail-section-2'>
        <p>Division Detail Screen</p>
        <Link to={'/AddUserClient'} style={{textDecoration: 'none'}}><button className="create-btn">Add Client</button></Link>
        </div> 
        <br />
        <Divider /> 
        <br />  
      <table className="table">
        <thead>
          <tr>
            <th className='tr-th-divisionuser'>User ID</th>
            <th className='tr-th-divisionuser'>User Name</th>
            <th className='tr-th-divisionuser'>Division</th>
            <th className='tr-th-divisionuser'>Action</th>
            </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id} className={index % 2 !== 0 ? 'even-row row' : row}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.division}</td>
              <td>
              <Link to={'/EditUserClient'} style={{textDecoration: 'none'}}><button className="update-btn">Edit</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DivisionUsersSection;