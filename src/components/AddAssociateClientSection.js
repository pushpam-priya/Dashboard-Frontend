import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link, useNavigate } from 'react-router-dom';
import cloudIcon from "../image/cloudicon.svg";
import './AddAssociateClientSection.css';
import { useFormik } from 'formik';
import { addAssociateClientSchema } from '../schemas';

const AddAssociateClientSection = ({ name, btn2 }) =>{
const initialValues = {
  title: "",
  warehouse: "",
  fileUpload: null,
};


const handlekeyDown = (event, maxLength) => {
  if (event.target.value.length >= maxLength && event.key !== "Backspace") {
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
  validationSchema: addAssociateClientSchema,
  onSubmit: (values, action) => {
    console.log(values);
    action.resetForm();
    setSelectedFile(null);
    navigate("/AssociateClient", { replace: true })
    // alert("Submitted!");
  },
});

const [selectedFile, setSelectedFile] = useState(null);
const handleFileChange = (event) => {
  const file = event.target.files[0];
  values.fileUpload = file;
  setSelectedFile(file);
};

const navigate = useNavigate()

const handleBackClick = () => {
  navigate(-1); // Go back to the previous page using useNavigate
};

console.log(values, errors, selectedFile, values.fileUpload);
const handleRemoveImg = () => {
  setSelectedFile(null);
  handleChange({
    target: {
      name: "fileUpload",
      value: null,
    },
  });
};

  return (
    <div className="main">
      <Link
        to={"/AssociateClient"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="arrow-section">
          <ArrowBackIcon sx={{ fontSize: "24px" }} />
          <h4>{name}</h4>
        </div>
      </Link>
      <hr className="hr" />
      <form onSubmit={handleSubmit}>
        <div className="add-img-class">
          <p className="add-image-division">Add Image</p>
          {selectedFile && (
            <div className="image-preview drag-and-drop" style={{width: '50%'}}>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Uploaded Image"
                height={"90%"}
                width={"70%"}
              />
              <button className="remove-button" onClick={handleRemoveImg}>
                Remove
              </button>
            </div>
          )}

          {!selectedFile && (
            <div className="drag-and-drop" style={{ width: "50%",height:"223px"}}>
              <img src={cloudIcon} alt="" height={"30px"} />

              <h5 className="dandd-txt">
                <>Drag & Drop here</>
              </h5>
              <p className="dandd-txt">
                <>or</>
              </p>
              <br />
              <div className="image-input">
                <input
                  value={selectedFile}
                  type="file"
                  name="fileUpload"
                  accept="image/*"
                  style={{ height: "3vh" }}
                  id="fileUpload"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="fileUpload"
                  className="upload-input-class"
                  style={{ height: "1.5" }}
                >
                  <>Upload</>
                </label>
              </div>
            </div>
          )}
          {!values.fileUpload && errors.fileUpload && touched.fileUpload ? (
            <p style={{ color: "red", marginTop: "0px", float: "left" }}>
              {errors.fileUpload}
            </p>
          ) : null}
        </div>
        <div className="createdivision-inputfields">
          <div className="createdivision-inputfield">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onKeyDown={(event) => handlekeyDown(event, 64)}
              onBlur={handleBlur}
              maxLength={64}
            />
            {errors.title && touched.title ? (
              <p style={{ color: "red", marginTop: "-5px", float: "left" }}>
                {errors.title}
              </p>
            ) : null}
          </div>
          <div className="createdivision-inputfield">
            <label htmlFor="main-warehouse">Main Warehouse</label>
            <select
              id="main-warehouse"
              name="warehouse"
              value={values.warehouse}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select Warehouse</option>
              <option value="warehouse1">Warehouse 1</option>
              <option value="warehouse2">Warehouse 2</option>
              <option value="warehouse3">Warehouse 3</option>
            </select>
            {errors.warehouse && touched.warehouse ? (
              <p style={{ color: "red", marginTop: "-5px", float: "left" }}>
                {errors.warehouse}
              </p>
            ) : null}
          </div>
        </div>
        <div className="buttons">
          <button className="add-button">{btn2}</button>
        </div>
      </form>
    </div>
  );
}

export default AddAssociateClientSection;