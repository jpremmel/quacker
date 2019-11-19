import React from 'react';
import QuackerBox from './QuackerBox';
import Bio from './Bio';
import PropTypes from 'prop-types';

function ColumnBio(props){
  return (
    <div> 
      <Bio/>
      <QuackerBox onNewQuackCreation={props.onNewQuackCreation}/>
    </div>
  );
}

ColumnBio.propTypes = {
  onNewQuackCreation: PropTypes.func
};

export default ColumnBio;