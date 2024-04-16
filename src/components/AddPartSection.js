import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import './AddPartSection.css';
import AddMediaModal from '../Modal/AddMediaModal';
import { useFormik } from "formik";
import { addPartSchema } from "../schemas";

const AddPartSection = ({ name, btn }) => {

    const [showModal, setShowModal] = useState(false);

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const initialValues = {
        division: "",
        partNumber: "",
        partDescription: "",
        addMedia: "",
    };

    const handlekeyDown = (event, maxLength) => {
        if (event.target.value.length >= maxLength && event.key !== 'Backspace') {
            event.preventDefault();
        }
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const navigate = useNavigate();


    const {
        values,
        errors,
        handleBlur,
        handleChange,
        touched,
        // resetForm,
        handleSubmit,
        // setFieldValue,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: addPartSchema,
        onSubmit: (values, action) => {
            if (!isCheckboxChecked) { // Step 3
                alert('Please check the checkbox.');
                return;
            }

            console.log(values);
            action.resetForm();
            setIsCheckboxChecked(false);
            navigate("/Parts", { replace: true });
        },
    });

    return (
        <div className='main'>
            <Link to={'/Parts'} style={{ textDecoration: 'none', color: "black" }}><div className="arrow-section">
                <ArrowBackIcon sx={{ fontSize: '24px', color: 'black' }} />
                <h4>{name}</h4>
            </div></Link>
            <hr className='hr' />
            <form>
                <div className="inputfields">
                    <div className="inputfield">
                        <div className="inputfield-div">
                            <div className="inputfield-subdiv">
                                <label htmlFor="main-Division">Division</label>
                                <select id="main-Division" name="division"
                                    value={values.division}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                    <option value="">Select Division</option>
                                    <option value="Division1">Division 1</option>
                                    <option value="Division2">Division 2</option>
                                    <option value="Division3">Division 3</option>
                                </select>
                                {errors.division && touched.division ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left" }}>
                                        {errors.division}
                                    </p>
                                ) : null}
                            </div>
                            <div className="inputfield-subdiv">
                                <label htmlFor="title">Part Number</label>
                                <input type="text" id="partNumber" placeholder="Enter Part number" name="partNumber"
                                    value={values.partNumber}
                                    onChange={(e) => {
                                        const re = /^[0-9a-zA-Z\b-]+$/; 
                                        if (e.target.value === '' || re.test(e.target.value)) {
                                            handleChange(e);
                                        }
                                    }} 
                                    onKeyDown={(event) => handlekeyDown(event, 10)}
                                    onBlur={handleBlur} 
                                    maxLength={10}
                                    />
                                    
                                {errors.partNumber && touched.partNumber ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left" }}>
                                        {errors.partNumber}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="inputfield">
                        <div className="inputfield-div">
                            <div className="inputfield-subdiv" id="description-sub-div">
                                <label htmlFor="title">Part Description</label>
                                <textarea type="text" id="partDescription" placeholder="Enter Description" name="partDescription"
                                    value={values.partDescription}
                                    onChange={handleChange}
                                       onKeyDown={(event) => handlekeyDown(event, 30)}
                                    onBlur={handleBlur} />
                                {errors.partDescription && touched.partDescription ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left" }}>
                                        {errors.partDescription}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="inputfield" id="checkbox-div">
                        <div className="inputfield-div">
                            <input type="checkbox" style={{border:"2px solid red"}} id="check-box" checked={isCheckboxChecked} onChange={(e) => setIsCheckboxChecked(e.target.checked)} name="serialized"/>
                            <label htmlFor="Serialized" id="check-box-text">Serialized</label>
                        </div>
                    </div>
                    <div className="inputfield">
                        <div className="inputfield-div">
                            <div className="inputfield-subdiv" id="addmedia-sub-div">
                            <button type="button" className="media-btn" onClick={openModal}>+ Add Media</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={handleSubmit} className="add-button">{btn}</button>
                </div>
            </form>
            {showModal && <AddMediaModal open={showModal} handleClose={closeModal} />}
            
        </div>
    )
};

export default AddPartSection;