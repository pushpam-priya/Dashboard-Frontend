import React from 'react';

import './BarGraph.css';

const BarGraph = ({ data }) => {
  // Find the maximum value in the data
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="bar-graph" style={{ width: '100%', height: '400px' }}>
      
      {data.map((item, index) => (
        <div key={index} className="bar" >
          {/* <div className="bar-label">{item.label}</div> */}
          <div className="bar-value">{item.value}</div>
          <div className="bar-container" style={{ width: '50px', height: '400px' }}>
            <div
              className="bar-fill"
              style={{width:'50px' , height: `${(100 - (item.value / maxValue) * 100)}%` }}
            ></div>
          </div>
          <div className="bar-label">{item.label}</div>
          {/* <div className="bar-value">{item.value}</div> */}
        </div>
      ))}
    </div>
  );
};

export default BarGraph;


