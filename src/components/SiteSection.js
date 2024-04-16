import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

import './SiteSection.css';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { siteSchema } from "../schemas";
import countriesData from "../json/Countries.json";

const SiteSection = ({ name, btn }) => {
    const [validCountries] = useState(countriesData.countries);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const validateCountry = value => {
        if (!validCountries.includes(value)) {
            return 'Please enter a valid country name.';
        }
    };

    const handlekeyDown = (event, maxLength) => {
        if (event.target.value.length >= maxLength && event.key === 'Space') {
            event.preventDefault();
        }
    };

    const handlekeyDownName = (event) => {
        if (event.key === " ") {
          event.preventDefault();
        }
      };

    const initialValues = {
        title: "",
        country: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        firstName: "",
        lastName: "",
        phone: "",
        division: "",
        description: "",
        // mainwarehouse: false,
    };

    // const handleSubmit = async (values, action) => {
    //     try {
    //         const response = await fetch('http://localhost:5002/api/warehouse', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(values),
    //         });
    //         const data = await response.json();
    //         console.log(data); // Log the response from the backend
    //         action.resetForm();
    //         alert('Submitted!');
    //     } catch (error) {
    //         console.error('Error occurred:', error);
    //         // Handle error scenarios
    //     }
    // };

    const handleSubmitBackend = async (values, action) => {
        try {
            const dataToSend = {
                ...values,
                mainWarehouse: isCheckboxChecked,
            };
            console.log("Sent data", dataToSend);
            const response = await axios.post('http://localhost:5002/api/warehouse', dataToSend);
            console.log("Data from backend", response.data); // Log the response from the backend
            action.resetForm();
            alert('Submitted!');
        } catch (error) {
            console.error('Error occurred:', error);
            // Handle error scenarios
        }
    };

    const {
        values,
        errors,
        handleBlur,
        handleChange,
        touched,
        handleSubmit,
        // setFieldValue,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: siteSchema,
        // onSubmit: (values, action) => {
        //     console.log(values);
        //     action.resetForm();
        //     alert('Submitted!')
        // },
        onSubmit: handleSubmitBackend
    });


    return (
        <div className='main'>
            <Link to={'/WarehouseSite'} style={{ textDecoration: 'none', color: "black" }}><div className="arrow-section">
                <ArrowBackIcon sx={{ fontSize: '24px', color: 'black' }} />
                <h4>{name}</h4>
            </div></Link>
            <hr className='hr' />
            <form onSubmit={handleSubmit} >
                <div className="inputfields">
                    <div className="inputfield">
                        <div className="inputfield-div">
                            <div className="inputfield-subdiv" id="title-sub-div">
                                <label htmlFor="title">Title</label>
                                <input    
                                    type="text" 
                                    id="title" 
                                    placeholder="Enter the title" 
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    maxLength={64}
                                    // onKeyDown={(event) => handlekeyDown(event, 64)} 

                                    />
                                    {errors.title && touched.title ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                                        {errors.title}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className="inputfield">
                        <h5>Address:</h5>
                        <div className="inputfield-div">
                            <div className="inputfield-subdiv">
                                <label htmlFor="country">Country</label>
                                <input 
                                    type="text" 
                                    id="Country" 
                                    placeholder="Enter the country" 
                                    name="country"
                                    value={values.country}
                                    onChange={handleChange}
                                    onKeyDown={(event) => handlekeyDown(event, 64)}
                                    maxLength={64}
                                    onBlur={(event) => {
                                        handleBlur(event);
                                        validateCountry(event.target.value);
                                    }}/>
                                { errors.country && touched.country ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                                        {errors.country}
                                    </p>
                                ) : null}
                            </div>
                            <div className="inputfield-subdiv">
                                <label htmlFor="street">Street Address</label>
                                <input 
                                    type="text" 
                                    id="Street" 
                                    placeholder="Enter the street" 
                                    name="street"
                                    value={values.street}
                                    onChange={handleChange}
                                    onKeyDown={(event) => handlekeyDown(event, 64)}
                                    maxLength={64}
                                    onBlur={handleBlur}/>
                                { errors.street && touched.street ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                                        {errors.street}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                        <div className="inputfield-div">
                            <div className="inputfield-subdiv">
                                <label htmlFor="city">City</label>
                                <input 
                                    type="text" 
                                    id="City" 
                                    placeholder="Enter the city" 
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    onKeyDown={(event) => handlekeyDown(event, 64)}
                                    maxLength={64}
                                    onBlur={handleBlur}/>
                                { errors.city && touched.city ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                                        {errors.city}
                                    </p>
                                ) : null}
                            </div>
                            <div className="inputfield-subdiv">
                                <label htmlFor="state">State</label>
                                <input 
                                    type="text" 
                                    id="State" 
                                    placeholder="Enter the state" 
                                    name="state"
                                    value={values.state}
                                    onChange={handleChange}
                                    onKeyDown={(event) => handlekeyDown(event, 64)}
                                    maxLength={64}
                                    onBlur={handleBlur}/>
                                { errors.state && touched.state ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                                        {errors.state}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                        <div className="inputfield-div">
                            <div className="inputfield-subdiv" id="postal-sub-div">
                                <label htmlFor="postalCode">Postal Code</label>
                                <input type="text" 
                                    id="Postal" 
                                    placeholder="Enter the postal code" 
                                    name="postalCode"
                                    value={values.postalCode}
                                    onChange={handleChange}
                                    onKeyDown={(event) => handlekeyDown(event, 10)}
                                    maxLength={10}
                                    onBlur={handleBlur}/>
                                { errors.postalCode && touched.postalCode ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                                        {errors.postalCode}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="inputfield">
                        <h5>Contact Name:</h5>
                        <div className="inputfield-div">
                            <div className="inputfield-subdiv">
                                <label htmlFor="first">First</label>
                                <input 
                                    type="text" id="First" 
                                    placeholder="Enter the first name" 
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onKeyDown={(event) => {
                                        handlekeyDownName(event);
                                        handlekeyDown(event, 20);
                                    }}
                                    maxLength={20}
                                    onBlur={handleBlur}/>
                                { errors.firstName && touched.firstName ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                                        {errors.firstName}
                                    </p>
                                ) : null}
                            </div>
                            <div className="inputfield-subdiv">
                                <label htmlFor="last">Last</label>
                                <input 
                                    type="text" 
                                    id="Last" 
                                    placeholder="Enter the last name" 
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onKeyDown={(event) => {
                                        // handlekeyDownName(event);
                                        handlekeyDown(event, 20);
                                    }}
                                    maxLength={20}
                                    onBlur={handleBlur}/>
                                { errors.lastName && touched.lastName ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                                        {errors.lastName}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="inputfield">
                        <div className="inputfield-div">
                            <div className="inputfield-subdiv" id="phone-sub-div">
                                <label htmlFor="phone">Phone Number</label>
                                <input 
                                    type="text" 
                                    id="Phone" 
                                    placeholder="Enter the phone number" 
                                    name="phone"
                                    value={values.phone}
                                    // onChange={handleChange}
                                    // onKeyDown={(event) => handlekeyDown(event, 10)}
                                    maxLength={10}
                                    onChange={(e) => {
                                        const re = /^[0-9\b+-]+$/; 
                                        if (e.target.value === '' || re.test(e.target.value)) {
                                            handleChange(e);
                                        }
                                    }}                                
                                    onBlur={handleBlur}/>
                                { errors.phone && touched.phone ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                                        {errors.phone}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="inputfield">
                        <div className="inputfield-div">
                            <div className="inputfield-subdiv" id="division-sub-div" >
                                <label htmlFor="main-Division">Division</label>
                                <select id="main-Division"  name="division"
                                    value={values.division}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                    <option value="">Select Division</option>
                                    <option value="Division1">Division 1</option>
                                    <option value="Division2">Division 2</option>
                                    <option value="Division3">Division 3</option>
                                </select>
                                { errors.division && touched.division ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                                        {errors.division}
                                    </p>
                                ) : null}
                            </div>

                        </div>

                    </div>
                    <div className="inputfield" id="checkbox-div">
                        <div className="inputfield-div">
                            <input type="checkbox" id="check-box" checked={isCheckboxChecked} onChange={(e) => setIsCheckboxChecked(e.target.checked)}  name="mainWarehouse"/>
                            <label htmlFor="mainWarehouse" id="check-box-text">Main Warehouse</label>
                        </div>
                    </div>
                    <div className="inputfield">
                        <div className="inputfield-div">
                            <div className="inputfield-subdiv" id="description-sub-div">
                                <label htmlFor="description">Description</label>
                                <textarea 
                                    type="text" 
                                    id="description" 
                                    placeholder="Enter the description" 
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    // onKeyDown={(event) => handlekeyDown(event, 200)}
                                    maxLength={200}
                                    onBlur={handleBlur}
                                    />
                                { errors.description && touched.description ? (
                                    <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                                        {errors.description}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <Link to="/WarehouseSite" style={{ textDecoration: 'none' }}>
                        <button type="button" className="cancel-button">Cancel</button>
                    </Link>
                    <button className="add-button">{btn}</button>
                </div>
            </form>
        </div>
    )
};

export default SiteSection;