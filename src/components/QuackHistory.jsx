import React from 'react';
import Quack from './Quack';
import PropTypes from 'prop-types';

// var masterQuackHistory = [
//   {
//     content: 'Tis the test quack'
//   },
//   {
//     content: 'QUACK'
//   },
//   {
//     content: 'You quack me up!!! XD'
//   },
//   {
//     content: 'Take a quack at it'
//   },
//   {
//     content: 'I can see ur butt quack hee hee im mature'
//   },
//   {
//     content: 'Not your quack Jack!'
//   },
//   {
//     content: 'Quack it upppppp'
//   },
// ];


function QuackHistory(props) {
  var quackHistoryStyle = {
    borderColor: '#27253d',
    padding: '20px'
  };
  return (
    <div 
      style={quackHistoryStyle}
      className="card">
    {props.quackHistory.map((thisQuack) =>
        <Quack content={thisQuack.quack}
          key={thisQuack.id}/>
      )}
    </div>
  );
}
QuackHistory.propTypes = {
  quackHistory: PropTypes.array
};

export default QuackHistory;