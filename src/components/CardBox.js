import React from "react";
import './CardBox.css';
import { Security } from "@mui/icons-material";

const CardBox = ({ color, title, count, background }) => {
  return (
    <div className="card-box" style={{ background: background }}>
      <div className="card">
        <div className="card-section1"> 
          <Security sx={{ width: '60px', height: '80px', color: color }} className="card-icon" />
        </div>
        <div className="card-section2">
          <p className="title">{title}</p>
          <p className="count">{count}</p>
        </div>
      </div>
    </div>
  );
}

export default CardBox;