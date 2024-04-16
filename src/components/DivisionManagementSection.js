import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

import './DivisionManagementSection.css';

const DivisionManagementSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState(null);

  const handleDeleteClick = (division) => {
    setSelectedDivision(division);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDeleteConfirm = () => {
    // Your delete logic here
    // For demonstration, let's just log the division details
    console.log("Deleting Division:", selectedDivision);
    setOpenModal(false);
  };

  const data = [
    { id: 1, name: 'Division 1', listedOn: '10-10-2023, 10:30 AM', warehouseCount: 4 },
    { id: 2, name: 'Division 2', listedOn: '10-10-2023, 10:30 AM', warehouseCount: 4 },
    { id: 3, name: 'Division 3', listedOn: '10-10-2023, 10:30 AM', warehouseCount: 4 },
    { id: 4, name: 'Division 4', listedOn: '10-10-2023, 10:30 AM', warehouseCount: 4 },
    { id: 5, name: 'Division 5', listedOn: '10-10-2023, 10:30 AM', warehouseCount: 4 },
    { id: 6, name: 'Division 6', listedOn: '10-10-2023, 10:30 AM', warehouseCount: 4 },
    { id: 7, name: 'Division 7', listedOn: '10-10-2023, 10:30 AM', warehouseCount: 4 },
    { id: 8, name: 'Division 8', listedOn: '10-10-2023, 10:30 AM', warehouseCount: 4 },
    { id: 9, name: 'Division 9', listedOn: '10-10-2023, 10:30 AM', warehouseCount: 4 },
    { id: 10, name: 'Division 10', listedOn: '10-10-2023, 10:30 AM', warehouseCount: 4 },
  ];

  return (
    <div className='division-management'>
      <div className='divisionManagement-section-1'>
        <TextField
          className='text-field'
          placeholder="Search by division name"
          InputProps={{
            startAdornment: (
              <SearchIcon className="search-icon" />
            ),
          }}
        />
        <Link to={'/CreateDivision'}><button className="create-btn">Create New Division</button></Link>
      </div>
      <br />
      <Divider />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th className='tr-th'>Division ID</th>
            <th className='tr-th'>Division Name</th>
            <th className='tr-th'>Listed On Date & Time</th>
            <th className='tr-th'>No. of Warehouse</th>
            <th className='tr-th'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id} className={index % 2 !== 0 ? 'even-row row' : row}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.listedOn}</td>
              <td>{row.warehouseCount}</td>
              <td>
                <Link to={'/AssociateClient'}><button className="view-btn">View</button></Link>
                <Link to={'/UpdateDivision'}><button className="update-btn">Update</button></Link>
                <button className="delete-btn" onClick={() => handleDeleteClick(row)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="delete-division-modal"
        aria-describedby="delete-division-description"
        className="modal-container"
      >
        <div className="modal">
        <div className='modal-section1'>
          <IconButton aria-label="close" className="modal-close-icon"  onClick={handleCloseModal}>
            <CloseIcon  />
          </IconButton>
          <h2 id="delete-division-modal">Delete {selectedDivision && selectedDivision.name}</h2>
          </div>
          <Divider />
          <div className='modal-section2'>
          <p id="delete-division-description">Are you sure you want to delete {selectedDivision && selectedDivision.name}?</p>
          <div className="modal-buttons">
            <button className="modal-no-btn" id='No' onClick={handleDeleteConfirm}>No</button>
            <button className="modal-yes-btn" id='Yes' onClick={handleCloseModal}>Yes</button>
          </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DivisionManagementSection;
