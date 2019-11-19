import React from 'react';
import QuackHistory from './QuackHistory';
import PropTypes from 'prop-types';

function ColumnQuacks(props){
  return (
    <QuackHistory quackHistory={props.quackHistory}/>
  );
}

ColumnQuacks.propTypes = {
  quackHistory: PropTypes.array
};

export default ColumnQuacks;