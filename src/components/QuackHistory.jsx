import React from 'react';
import Quack from './Quack';

var masterQuackHistory = [
  {
    content: 'Tis the test quack'
  },
  {
    content: 'QUACK'
  },
  {
    content: 'You quack me up!!! XD'
  },
  {
    content: 'Take a quack at it'
  },
  {
    content: 'I can see ur butt quack hee hee im mature'
  }
];

function QuackHistory() {
  var quackHistoryStyle = {
    borderColor: '#27253d',
    padding: '20px'
  };
  return (
    <div 
      style={quackHistoryStyle}
      className="card">
      {masterQuackHistory.map((quack, index) =>
        <Quack content={quack.content}
          key={index}/>
      )}
    </div>
  );
}

export default QuackHistory;