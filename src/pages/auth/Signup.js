import React from "react";
import InputBox from "../../components/InputBox";
import PageButton from "../../components/PageButton";
// import { Avatar, IconButton } from "@mui/material";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";
import AuthImg from "../../image/Frameauth-img.png";
import logo from "../../image/image 2logo-img.png";
import './auth.css';

const Signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone:"",
    pass1: "",
    pass2: "",
    profileImg: null,
  };

  const navigate = useNavigate();

  const handlekeyDown = (event) => {
    if (event.key === " ") {
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
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/Login", { replace: true });
    },
  });

  return (
    <div className="main-container">
      <div className="container-section1">
         <div>
            <img className="logo-img" src={logo} alt="" />
          </div>
        <form
          action=""
          onSubmit={handleSubmit}
          // style={{
          //   backgroundColor: "#b39ddb",
          //   padding: "10px 20px 10px 20px",
          //   margin: "10px 100px 10px 100px",
          // }}
        >
          <h1 className="heading">Sign Up</h1>
          <div>
            <div className="input-field">
              <p className="label">First Name</p>
              <InputBox
                name={"firstName"}
                placeholder={"First Name"}
                id={"firstname"}
                type={"text"}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handlekeyDown}
                maxLength={20}
              />
              {errors.firstName && touched.firstName ? (
                <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: 'left' }}>
                  {errors.firstName}
                </p>
              ) : null}
            </div>
            <div className="input-field">
              <p className="label">Last Name</p>
              <InputBox
                name={"lastName"}
                placeholder={"Last Name"}
                id={"lastname"}
                type={"text"}
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                // onKeyDown={handlekeyDown}
                maxLength={20}
              />
              {errors.lastName && touched.lastName ? (
                <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: 'left' }}>
                  {errors.lastName}
                </p>
              ) : null}
            </div>
            <div className="input-field">
              <p className="label">Email</p>
              <InputBox
                name={"email"}
                placeholder={"Email"}
                id={"emailid"}
                type={"email"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handlekeyDown}
                maxLength={64}
              />
              {errors.email && touched.email ? (
                <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: 'left' }}>
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div className="input-field">
              <p className="label">Address</p>
              <InputBox
                name={"address"}
                placeholder={"Address"}
                id={"address"}
                type={"text"}
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={70}
              />
              {errors.address && touched.address ? (
                <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: 'left' }}>
                  {errors.address}
                </p>
              ) : null}
            </div>
            <div className="input-field">
              <p className="label">Phone Number</p>
              <InputBox
                name={"phone"}
                placeholder={"Phone Number"}
                id={"phone"}
                type={"tel"}
                maxLength={10}
                value={values.phone}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/; // regex to match only numbers
                  if (e.target.value === '' || re.test(e.target.value)) {
                      handleChange(e);
                  }
              }}   
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone ? (
                <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: 'left' }}>
                  {errors.phone}
                </p>
              ) : null}
            </div>
            <div className="input-field">
              <p className="label">Password</p>
              <InputBox
                name={"pass1"}
                placeholder={"Password"}
                id={"password"}
                type={"password"}
                value={values.pass1}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handlekeyDown}
                maxLength={20}
              />
              {errors.pass1 && touched.pass1 ? (
                <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: 'left' }}>
                  {errors.pass1}
                </p>
              ) : null}
            </div>
            <div className="input-field">
              <p className="label">Confirm Password</p>
              <InputBox
                name={"pass2"}
                placeholder={"Confirm Password"}
                id={"confirmpassword"}
                type={"password"}
                value={values.pass2}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handlekeyDown}
                maxLength={20}
              />
              {errors.pass2 && touched.pass2 ? (
                <p style={{ color: "red", marginTop: "-5px", float: "left", textAlign: 'left' }}>
                  {errors.pass2}
                </p>
              ) : null}{" "}
            </div>

            <br />
            {/* ... (Your other input fields) */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {/* <PageButton type={"button"} name={"Reset"} onClick={resetForm} /> */}
                <PageButton type={"submit"} name={"Sign Up"} />
              </div>

              <div>
                Account already exists?<Link to={"/Login"} style={{color: "#FAA43C"}}> Login </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container-section2">
        <img className="auth-img" src={AuthImg} alt="auth-img" />
      </div>
    </div>
  );
};

export default Signup;
