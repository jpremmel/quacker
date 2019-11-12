import React from 'react';

function Bio() {
  var bioStyle = {
    width: '30%',
    padding: '10',
    borderColor: '#27253d'
  };
  return (
    <div
      style={bioStyle}
      className="card">
      <p>This is my bio</p>
    </div>
  );
}

export default Bio;