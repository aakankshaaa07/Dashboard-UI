import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faGrip, faGear } from '@fortawesome/free-solid-svg-icons';

function Sidenav() {

  return (
    <div className="Sidenav">
      <div className="navItem">
        <FontAwesomeIcon icon={faChartLine} className="navIcon"/>
        <p>Reports</p>
      </div>
      <div className="navItem activeItem">
        <FontAwesomeIcon icon={faGrip} className="navIcon"/>
        <p>Workspaces</p>
      </div>
      <div className="navItem">
        <FontAwesomeIcon icon={faGear} className="navIcon"/>
        <p>Settings</p>
      </div>
    </div>
  );
}

export default Sidenav;