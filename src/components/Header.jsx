import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var headerStyle = {
    color: '#27253d',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '25px'
  };
  return (
    <div>
      <h1 style={headerStyle}>Quacker</h1>
      <Link to="/">See All Quackers</Link> | <Link to="/profile">See My Profile</Link>
    </div>
  );
}

export default Header;