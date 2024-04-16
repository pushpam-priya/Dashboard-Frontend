import React from "react";
import InputBox from "../../components/InputBox";
import PageButton from "../../components/PageButton";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import AuthImg from "../../image/Frameauth-img.png";
import logo from "../../image/image 2logo-img.png";
import loginWithGoogle from "../../image/Group 1171277609login-with-google.png";
import './auth.css';

const Login = () => {
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
    if (event.key===" ")
      event.preventDefault();
  }

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
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      navigate("/Dashboard", { replace: true });
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
          <h1 className="heading">Welcome Back</h1>
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
                <p style={{ color: "red", marginTop: "-5px", float: "left" }}>
                  {errors.pass1}
                </p>
              ) : null}
            </div>
            <Link style={{float: 'right', marginTop: "-30px", color: 'black'}} to={'/ForgotPassword'}>Forgot Password?</Link>
            <br />
            <div style={{ display: "flex", flexDirection: "column", }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <PageButton type={"submit"} name={"Log In"} />
              </div><br />
              <div>Or <b>Login</b> with</div> <br />
              <div><img src={loginWithGoogle} alt="" /></div>

              {/* <div>
                  Account does not exists?<Link to={"/"} style={{color: "#FAA43C"}}> Signup </Link>
              </div> */}
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

export default Login;

// import React, { useState } from "react";
// import InputBox from "../components/InputBox";
// import PageButton from "../components/PageButton";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import { loginSchema } from "../schemas";
// import AuthImg from "../image/Frameauth-img.png";
// import logo from "../image/image 2logo-img.png";
// import loginWithGoogle from "../image/Group 1171277609login-with-google.png";
// import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import eye icons
// import './auth.css';

// const Login = () => {
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     phone:"",
//     pass1: "",
//     pass2: "",
//     profileImg: null,
//   };

//   const navigate = useNavigate();

//   // State to track password visibility
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     values,
//     errors,
//     handleBlur,
//     handleChange,
//     touched,
//     handleSubmit,
//   } = useFormik({
//     initialValues: initialValues,
//     validationSchema: loginSchema,
//     onSubmit: (values, action) => {
//       console.log(values);
//       action.resetForm();
//       navigate("/Dashboard", { replace: true });
//     },
//   });

//   // Function to toggle password visibility
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="main-container">
//       <div className="container-section1">
//          <div>
//             <img className="logo-img" src={logo} alt="" />
//           </div>
//         <form
//           action=""
//           onSubmit={handleSubmit}
//         >
//           <h1 className="heading">Welcome Back</h1>
//           <div>
//             <div className="input-field">
//               <p className="label">Email</p>
//               <InputBox
//                 name={"email"}
//                 placeholder={"Email"}
//                 id={"emailid"}
//                 type={"email"}
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.email && touched.email ? (
//                 <p style={{ color: "red", marginTop: "-5px", float: "left" }}>
//                   {errors.email}
//                 </p>
//               ) : null}
//             </div>
//             <div className="input-field">
//               <p className="label">Password</p>
//               <div className="password-input">
//                 <InputBox
//                   name={"pass1"}
//                   placeholder={"Password"}
//                   id={"password"}
//                   type={showPassword ? "text" : "password"} // Toggle password visibility based on state
//                   value={values.pass1}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {/* Eye icon to toggle password visibility */}
//                 {showPassword ? (
//                   <Visibility
//                     className="eye-icon"
//                     onClick={togglePasswordVisibility}
//                     style={{ color: "gray", fontSize: "30px" }} // Customize color and size
//                   />
//                 ) : (
//                   <VisibilityOff
//                     className="eye-icon"
//                     onClick={togglePasswordVisibility}
//                     style={{ color: "gray", fontSize: "30px" }} // Customize color and size
//                   />
//                 )}
//               </div>
//               {errors.pass1 && touched.pass1 ? (
//                 <p style={{ color: "red", marginTop: "-5px", float: "left" }}>
//                   {errors.pass1}
//                 </p>
//               ) : null}
//             </div>
//             <Link style={{float: 'right', marginTop: "-30px", color: 'black'}} to={'/ForgotPassword'}>Forgot Password?</Link>
//             <br />
//             <div style={{ display: "flex", flexDirection: "column", }}>
//               <div style={{ display: "flex", justifyContent: "center" }}>
//                 <PageButton type={"submit"} name={"Log In"} />
//               </div><br />
//               <div>Or <b>Login</b> with</div> <br />
//               <div><img src={loginWithGoogle} alt="" /></div>
//             </div>
//           </div>
//         </form>
//       </div>
//       <div className="container-section2">
//         <img className="auth-img" src={AuthImg} alt="auth-img" />
//       </div>
//     </div>
//   );
// };

// export default Login;






