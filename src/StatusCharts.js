import './App.css';
import React from 'react';

function StatusCharts() {
  return (
    <div className="StatusCharts">
      <h2>Stats Overview</h2>
      <div className="activeLine">
        <p>Active</p>
        <div className="fullBar">
          <div className="activeBarFill" style={{width: "63%"}}></div>
        </div>
        <p className="value">63%</p>
      </div>
      <div className="inactiveLine">
        <p>Inactive</p>
        <div className="fullBar">
          <div className="inaactiveBarFill" style={{width: "88%"}}></div>
        </div>
        <p className="value">88%</p>
      </div>
    </div>
  );
}

export default StatusCharts;