import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const InputBox = ({ placeholder, name, type, id, onClick, onBlur, onChange, onKeyDown, value, maxLength }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <TextField
        name={name}
        placeholder={placeholder}
        type={showPassword ? 'text' : type} // Conditionally change the type to 'text' when showPassword is true
        id={id}
        maxLength = {maxLength}
        onClick={onClick}
        onBlur={onBlur}
        onChange={onChange}
        value={value !== null ? value : ''}
        variant="outlined"
        fullWidth
        margin="normal"
        onKeyDown={onKeyDown}
        inputProps={{maxLength:maxLength}}
        InputProps={{ // Custom InputProps for visibility toggle icon
          endAdornment: type === 'password' && ( // Render visibility toggle icon only for password type
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {!showPassword ? <VisibilityOff style={{fontSize: '30px'}} /> : <Visibility style={{fontSize: '30px'}} />}
              </IconButton>
            </InputAdornment>
          )
        }}
        style={{ marginRight: "5px", backgroundColor: "white", borderRadius: '5px' }}
      />
    </div>
  );
};

export default InputBox;

