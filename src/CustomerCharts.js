import './App.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


function CustomerCharts() {
  
  // Dummy data to feed into the Doughnut graphs
  const currentdata = {
    labels: ["Yes", "No"],
      datasets: [{
        data: [85, 15],
        backgroundColor: ['#5F27CD', '#E2E2E2'],
      }]
  };
  const targetData = {
      labels: ["Yes", "No"],
      datasets: [{
        data: [90, 10],
        backgroundColor: ["#FF6B6B", "#E2E2E2"]
      }],
  };
  const newData = {
      labels: ["Yes", "No"],
      datasets: [{
        data: [66, 34],
        backgroundColor: ["#16C09861", "#E2E2E2"]
      }],
  };
  const retargetData = {
    labels: ["Yes", "No"],
    datasets: [{
      data: [30, 70],
      backgroundColor: ["#FFC5C5", "#E2E2E2"]
    }],
  };
  // To remove the default legend and tooltip of chartjs and reduce the thickness of the doughnut
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      }
    },
    cutout: '75%',
  };

  // To adjust the size of the chart
  const chartContainerStyle = {
    width: '100px',
    height: '100px',
  };

  return (
    <div className="CustomerCharts">
      <h2>All Customers</h2>
      <div className="customerChart">
        <div className="DoughnutChart" style={chartContainerStyle}>
          <Doughnut data={currentdata} options={options}/>
          <p className="innertext" style={{color: "#5F27CD"}}>83%</p>
          <p className="caption" >Current Customers</p>
        </div>
        <div className="DoughnutChart" style={chartContainerStyle}>
          <Doughnut data={newData} options={options}/>
          <p className="innertext" style={{color: "#16C09861"}}>66%</p>
          <p className="caption" >New Customers</p>
        </div>
        <div className="DoughnutChart" style={chartContainerStyle}>
          <Doughnut data={targetData} options={options}/>
          <p className="innertext" style={{color: "#FF6B6B"}}>90%</p>
          <p className="caption" >Target Customers</p>
        </div>
        <div className="DoughnutChart" style={chartContainerStyle}>
          <Doughnut data={retargetData} options={options}/>
          <p className="innertext" style={{color: "#FFC5C5"}}>30%</p>
          <p className="caption" >Retarget Customers</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerCharts;