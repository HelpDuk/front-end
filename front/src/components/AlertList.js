import React from 'react';
import AlertBox from './AlertBox'; // AlertBox 컴포넌트 import
import "../styles/AlertList.css";

const AlertList = ({ alerts }) => {
  return (
    <div className="alert-list">
      {alerts.map((alert, index) => (
        <AlertBox key={index} review={alert.review} timestamp={alert.timestamp} />
      ))}
    </div>
  );
};

export default AlertList;