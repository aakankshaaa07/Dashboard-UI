import './App.css';
import React from 'react';
import logo from './logo.png'
import Sidenav from './Sidenav';
import Header from './Header';
import Dashboard from './Dashboard';

function App() {

  return (
    <div className="App">
      <div className="dashboardContainer">
        <div className="logoContainer"><center><img src={logo} alt="logo" className='logoImage'/></center></div>
        <div className="header"><Header/></div>
        <div className="sideNav"><Sidenav/></div>
        <div className="dashboard"><Dashboard/></div>
      </div>
    </div>
  );
}

export default App;
