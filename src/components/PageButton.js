import * as React from 'react';
import Button from '@mui/material/Button';

export default function ContainedButtons({name, onClick, type}) {
  return (

      <Button variant="contained" onClick={onClick} type={type} fullWidth style={{backgroundColor: '#FAA43C',height: "50px", width: "233px", padding: "10px 30px 10px 30px", fontSize: '18px',  Gap: "10px", textTransform: 'none'}}>{name}</Button>

  );
}