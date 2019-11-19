import React from 'react';
import duck from '../assets/images/duck.jpg';

function Bio() {
  var bioStyle = {
    padding: '10',
    borderColor: '#27253d',
    
  };
  var imgStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5px'
  };
  return (
    <div
      style={bioStyle}
      className="card">
      <img
        style={imgStyle}
        src={duck}/>
      <br/>
      <p>I am the original quacker. Hear me quack.</p>
    </div>
  );
}

export default Bio;