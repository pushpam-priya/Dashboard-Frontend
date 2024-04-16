import React from "react";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputBox from "./InputBox";
import { Link } from "react-router-dom";

import "./AddUserClientSection.css";
import { useFormik } from "formik";
import { addUserClientSchema } from "../schemas";

const AddUserClientSection = ({ name, btn }) => {
  const initialValues = {
    name: "",
    email: "",
    pass1: "",
    client: "",
  };

  const handlekeyDown = (event) => {
    if (event.key === " " || event.code === "Space" || event.keyCode === 32) {
      event.preventDefault();
    }
  };

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
    validationSchema: addUserClientSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      alert('Submitted!')
    },
  });

  return (
    <div className="add-user-client">
      <Link
        to={"/ClientDetail"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="add-user-client-section-1">
          <ArrowBackIcon sx={{ fontSize: "24px" }} />
          <h4>{name}</h4>
        </div>
      </Link>
      <Divider />
      <br />
      <form onSubmit={handleSubmit} className="add-user-client-section-2">
        <div className="add-user-client-section-2-div1">
          <div className="add-user-client-section-2-div1-subdiv subdiv1">
            <div className="input-div">
              <label htmlFor="title">Name</label>
              <InputBox
                name={"name"}
                placeholder={"Enter the name"}
                id={"name"}
                type={"text"}
                value={values.name}
                onChange= {handleChange}
                onBlur={handleBlur}
                // onKeyDown={(event) => handlekeyDown(event, 30)}
                maxLength={30}
              />
              {errors.name && touched.name ? (
                <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div className="input-div">
              <label htmlFor="title">Email</label>
              <InputBox
                name={"email"}
                placeholder={"Enter the email"}
                id={"emailid"}
                type={"email"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handlekeyDown}
                maxLength={64}
              />
              {errors.email && touched.email ? (
                <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>
          <div className="add-user-client-section-2-div1-subdiv subdiv2">
            <div className="input-div">
              <label htmlFor="title">Password</label>
              <InputBox
                name={"pass1"}
                placeholder={"Enter the password"}
                id={"password"}
                type={"password"}
                value={values.pass1}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={(event) => handlekeyDown(event)}
                maxLength={20}
              />
              {errors.pass1 && touched.pass1 ? (
                <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                  {errors.pass1}
                </p>
              ) : null}
            </div>
            <div className="input-div">
              <label htmlFor="client">Client</label>
              <InputBox
                name={"client"}
                placeholder={"Enter the client"}
                id={"client"}
                type={"client"}
                value={values.client}
                onChange={handleChange}
                onBlur={handleBlur}
                // onKeyDown={(event) => handlekeyDown(event, 30)}
                maxLength={30}
              />
              {errors.client && touched.client ? (
                <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: "left" }}>
                  {errors.client}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <br />
        <div className="add-user-client-section-2-div2">
          <button className="create-btn">{btn}</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserClientSection;
