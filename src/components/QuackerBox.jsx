import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

//Styled with CSS object. This is the way React advocates to implement styling.
function QuackerBox(props) {
  var quackerBtnStyle = {
    marginTop: '15px',
    borderColor: '#27253d',
    backgroundColor: '#326765',
    color: '#f5f5c6',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  var quackerInputStyle = {
    marginTop: '15px',
    borderColor: '#27253d'
  };
  let _quack = null;

  function handleNewQuackSubmission(event) {
    event.preventDefault();
    props.onNewQuackCreation({ quack: _quack.value, id: v4() });
    _quack.value = '';
  }
  return (
    <div>

      <form onSubmit={handleNewQuackSubmission}> 
        <input 
          style={quackerInputStyle}
          className="form-control"
          id='quack'
          placeholder="Add a quack here"
          type="text"
          ref={(input) => { _quack = input; }}/>
        <button 
          style={quackerBtnStyle}
          className="btn"
          type="submit">Quack!</button>
      </form>
    </div>   
  );
}
QuackerBox.propTypes = {
  onNewQuackCreation: PropTypes.func
};
export default QuackerBox;