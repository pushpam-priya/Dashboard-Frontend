import React from "react";
import InputBox from "../../components/InputBox";
import PageButton from "../../components/PageButton";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { forgotpasswordSchema } from "../../schemas";
import AuthImg from "../../image/Frameauth-img.png";
import logo from "../../image/image 2logo-img.png";
import './auth.css';

const ForgotPassword = () => {
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
    validationSchema: forgotpasswordSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      alert('OTP Sent!');
      // navigate("/Dashboard", { replace: true });
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
        >
          <h1 className="heading">Forgot Password</h1>
          <p style={{width: "500px", height: "37px", textAlign: "left", fontWeight: '400', fontSize: "18px", color: "rgba(32, 33, 35, 0.6)" }}>Please enter your registered email here and we will send OTP to reset your password.</p>
          <div>
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
                <p style={{ color: "red", marginTop: "-5px", float: "left" }}>
                  {errors.email}
                </p>
              ) : null}
            </div>
            <br />
            {/* ... (Your other input fields) */}
            <div style={{ display: "flex", flexDirection: "column", }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <PageButton type={"submit"} name={"Send"} />
              </div><br />
              <div>Back to <Link style={{color: 'rgba(255, 140, 0, 1)'}} to={'/Login'}>Login</Link></div> <br />
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

export default ForgotPassword;
