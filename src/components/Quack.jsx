import React from 'react';
import PropTypes from 'prop-types';

function Quack(props){
  var quackStyle = {
    color: '#27253d'
  };
  return (
    <div>
      <p style={quackStyle}>{props.content}</p>
      <hr/>
    </div>
  );
}

Quack.propTypes = {
  content: PropTypes.string.isRequired
};

export default Quack;