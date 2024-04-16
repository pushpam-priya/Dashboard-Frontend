import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import { useState } from 'react';
import { ArrowBack } from '@mui/icons-material';
import cloudIcon from '../image/cloudicon.svg';

// import cloudimg from '../../assets/images/cloud.png'
import './AddMediaModal.css';
import { useNavigate } from 'react-router-dom';
 
 
export default function AddMediaModal({ open, handleClose }) {
    const modalStyle = {
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(125%, 30%)',
        // width: 400,
        backgroundColor: 'background.paper',
        boxShadow: 24,
        padding: 2,
        borderRadius: '10px',

    };
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate()
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page using useNavigate
    };

    const handleRemoveImg = () => {
        setSelectedFile(null);
    }

    return (
        <div>

            <Modal
                className='modal-modal'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{backgroundColor: 'transparent',}}
            >

                <Box className="box-modal-class" sx={open ? modalStyle : { }}>
                <header className="header-modal-class">
                <button className="back-button-modal-class" onClick={handleBackClick}>
                   <ArrowBack />Add Media
                </button>
                </header>
                    <main className="content-modal-class">
                        <div className='add-img-text-class'>Add image</div><br />

                        <div className="image-dropzone" >

                            {selectedFile && (
                                <div className="image-preview">
                                    <img src={URL.createObjectURL(selectedFile)} alt="Uploaded Image" height={'100vh'} width={'100%'}/>
                                    <button className="remove-button" onClick={handleRemoveImg}>Remove</button>
                                </div>
                            )}

                            {!selectedFile && (
                                <div className="drag-and-drop">
                                    <img src={cloudIcon} alt="" height={'30px'} />
                                    <h5 className='dandd-txt'><>Drag & Drop here</></h5>
                                    <p className='dandd-txt'><>or</></p><br />
                                    <div className="image-input" >
                                <input type="file" name="file-upload"  accept='image/*'style={{height:'3vh'}} id="file-upload" onChange={handleFileChange} />
                                <label htmlFor="file-upload" className='upload-input-class' style={{height:'1.5'}}><>Upload</></label>
                            </div>
                                </div>
                            )}

                           

                        </div>
                        <br />
                        <div className='name-sortby-class'>
                            <div>
                                <label htmlFor="">Name</label><br />
                                <input className='name-input-class' type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Sort By</label><br />
                                <select className='sortBy-input-class' >
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                    </main>



                    <br />

                    <center>

                        <button style={{ height: '5vh', width: '15vw', border: 'none', borderRadius: '8px', backgroundColor: 'orange', color: 'white' ,boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >Apply</button>
                    </center>
                </Box>
            </Modal>
        </div>
    );
}