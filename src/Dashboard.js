import './App.css';
import React from 'react';
import CustomerCharts from './CustomerCharts';
import StatusCharts from './StatusCharts';
import Table from './Table';

function Dashboard() {

  return (
    <div className="Dashboard">
      <div className="upperDash">
        <div className="customerChart"><CustomerCharts/></div>
        <div className="statusChart"><StatusCharts/></div>
      </div>
      <div className="dataTable"><Table/></div>
    </div>
  );
}

export default Dashboard;