import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';


import './WarehouseSiteSection.css'
import { Link } from 'react-router-dom'

const WarehouseSiteSection = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from backend API using axios
      const response = await axios.get('http://localhost:5003/api/warehouse');
      setData(response.data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error scenarios
    }
  };

  console.log(data);

  const fetchMainWarehouses = async () => {
    try {
        const response = await axios.get('http://localhost:5003/api/warehouse/main');
        setData(response.data);

    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error scenarios
    }
};

useEffect(() => {
    fetchMainWarehouses();
}, []);


  // const data = [
  //   { id: 1, site: '169th St, Bayside, NY', mainWarehouse: 'No', listedOn: '10-10-2023, 10:30 AM' },
  //   { id: 2, site: 'Main Warehouse', mainWarehouse: 'No', listedOn: '10-10-2023, 10:30 AM' },
  //   { id: 3, site: '169th St, Bayside, NY', mainWarehouse: 'No', listedOn: '10-10-2023, 10:30 AM' },
  //   { id: 4, site: 'Main Warehouse', mainWarehouse: 'No', listedOn: '10-10-2023, 10:30 AM' },
  //   { id: 5, site: '169th St, Bayside, NY', mainWarehouse: 'No', listedOn: '10-10-2023, 10:30 AM' },
  //   { id: 6, site: 'Main Warehouse', mainWarehouse: 'No', listedOn: '10-10-2023, 10:30 AM' },
  //   { id: 7, site: '169th St, Bayside, NY', mainWarehouse: 'No', listedOn: '10-10-2023, 10:30 AM' },
  //   { id: 8, site: 'Main Warehouse', mainWarehouse: 'No', listedOn: '10-10-2023, 10:30 AM' },
  //   { id: 9, site: '169th St, Bayside, NY', mainWarehouse: 'No', listedOn: '10-10-2023, 10:30 AM' },

    
  // ];


  return (
    <div className='warehouse-site'>
     <Link to={'/Dashboard'} style={{ textDecoration: "none", color: "black"}}><div className='warehouse-site-section-1'>
        <ArrowBackIcon sx={{ fontSize: '24px'}} />
        <h4>Sites</h4>
        </div> </Link>
        <Divider /> 
        <div className='warehouse-site-section-2'>
        <TextField
          className='text-field' 
          placeholder="Search by site name"
          InputProps={{
            startAdornment: (
              <SearchIcon className="search-icon" />
            ),
          }}
        />
        <Link to={'/AddSite'}><button className="create-btn">Add New Site</button></Link>
        </div> 
        <br />
        <Divider /> 
        <br />  
      <table className="table">
        <thead>
          <tr>
            <th className='tr-th-col'>Warehouse ID</th>
            <th className='tr-th-col'>Site</th>
            <th className='tr-th-col'>Main Warehouse</th>
            <th className='tr-th-col'>Listed On Date & Time</th>
            <th className='tr-th-col'>Action</th>
            </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id} className={index % 2 !== 0 ? 'even-row row' : row}>
              <td>{index++}</td>
              <td>{row.street}</td>
              <td>{row.mainWarehouse ? "Yes" : "No"}</td>
              <td>{row.createdAt}</td>
              <td>
                <Link to={'/ViewSite'}><button className="view-btn">View</button></Link>
                <Link to={'/UpdateSite'}><button className="update-btn">Update</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WarehouseSiteSection;