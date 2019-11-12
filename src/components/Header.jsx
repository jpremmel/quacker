import React from 'react';

function Header() {
  var headerStyle = {
    color: '#27253d',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '25px'
  };
  return (
    <h1 style={headerStyle}>Quacker</h1>
  );
}

export default Header;