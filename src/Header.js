import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Header() {

  return (
    <div className="Header">
      <h2>Orders</h2>
      <button><FontAwesomeIcon icon={faPlus} className="iconAdd"/>Add Order</button>
    </div>
  );
}

export default Header;