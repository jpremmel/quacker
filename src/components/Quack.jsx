import React from 'react';
import PropTypes from 'prop-types';

function Quack(props){
  return (
    <div>
      <p>{props.content}</p>
      <hr/>
    </div>
  );
}

Quack.propTypes = {
  content: PropTypes.string.isRequired
};

export default Quack;