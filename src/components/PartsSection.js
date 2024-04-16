import React, {useState} from "react";
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import thumbnail from '../image/thumbnail.jpeg';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import './PartsSection.css';
import { Link } from "react-router-dom";

const PartsSection = () => {

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
    { id: 1, partNumber: '77-S204', division: 'Phillipes connect', partDescription: 'PCT Air Tank Sensor Tee Fitting', serialized: true, thumbnail: '../image/thumbnail.jpeg' },
    { id: 2, partNumber: '77-S204', division: 'Phillipes connect', partDescription: 'PCT Air Tank Sensor Tee Fitting', serialized: true, thumbnail: '../image/thumbnail.jpeg' },
    { id: 3, partNumber: '77-S204', division: 'Phillipes connect', partDescription: 'PCT Air Tank Sensor Tee Fitting', serialized: true, thumbnail: '../image/thumbnail.jpeg' },
    { id: 4, partNumber: '77-S204', division: 'Phillipes connect', partDescription: 'PCT Air Tank Sensor Tee Fitting', serialized: true, thumbnail: '../image/thumbnail.jpeg' },
    { id: 5, partNumber: '77-S204', division: 'Phillipes connect', partDescription: 'PCT Air Tank Sensor Tee Fitting', serialized: true, thumbnail: '../image/thumbnail.jpeg' },
    { id: 6, partNumber: '77-S204', division: 'Phillipes connect', partDescription: 'PCT Air Tank Sensor Tee Fitting', serialized: true, thumbnail: '../image/thumbnail.jpeg' },
    { id: 7, partNumber: '77-S204', division: 'Phillipes connect', partDescription: 'PCT Air Tank Sensor Tee Fitting', serialized: true, thumbnail: '../image/thumbnail.jpeg' },
    { id: 8, partNumber: '77-S204', division: 'Phillipes connect', partDescription: 'PCT Air Tank Sensor Tee Fitting', serialized: true, thumbnail: '../image/thumbnail.jpeg' },
    { id: 8, partNumber: '77-S204', division: 'Phillipes connect', partDescription: 'PCT Air Tank Sensor Tee Fitting', serialized: true, thumbnail: '../image/thumbnail.jpeg' },

  ]; 

  return(
    <div className='parts'>
    <div className='parts-section-1'>
      <Link to={'/AddPart'} style={{textDecoration: 'none'}}><button className="add-parts-btn">
        <AddIcon />
        Add Parts
      </button></Link>
    </div>
    <Divider />
    <div className='parts-section-2'>
      <TextField
        className='text-field'
        placeholder="Search by part number or description"
        InputProps={{
          startAdornment: (
            <SearchIcon className="search-icon" />
          ),
        }}
      />
      <button className="create-btn">Download CSV</button>
    </div>
    <br />
    <Divider />
    <br />
    <table className="table">
      <thead>
        <tr>
          <th className='tr-th'>Part Number</th>
          <th className='tr-th'>Division</th>
          <th className='tr-th'>Part Description</th>
          <th className='tr-th'>Serialized</th>
          <th className='tr-th'>Thumbnail</th>
          <th className='tr-th'>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id} className={index % 2 !== 0 ? 'even-row row' : row}>
            <td>{row.partNumber}</td>
            <td>{row.division}</td>
            <td>{row.partDescription}</td>
            <td>{row.serialized ? <span className="serialized-icon">&#10006;</span> : null}</td>
            <td>{row.thumbnail ? <img src={thumbnail} alt="Thumbnail" className="thumbnail-image" /> : null}</td>
            <td>
              <Link to={'/EditPart'}><button className="edit-part-btn">Edit</button></Link>
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
          <h2 id="delete-division-modal">Delete {selectedDivision && selectedDivision.partNumber}</h2>
          </div>
          <Divider />
          <div className='modal-section2'>
          <p id="delete-division-description">Are you sure you want to delete {selectedDivision && selectedDivision.division}?</p>
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

export default PartsSection;