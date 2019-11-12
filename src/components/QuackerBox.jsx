import React from 'react';

//Styled with CSS object. This is the way React advocates to implement styling.
function QuackerBox() {
  var quackerBtnStyle = {
    margin: '15px',
    borderColor: '#27253d',
    backgroundColor: '#326765',
    color: '#f5f5c6',
  };
  var quackerInputStyle = {
    marginTop: '15px',
    borderColor: '#27253d'
  };
  return (
    <div>
      <form> 
        <input 
          style={quackerInputStyle}
          className="form-control"
          placeholder="Add a quack here"
          type="text"/>
        <button 
          style={quackerBtnStyle}
          className="btn"
          type="submit">Quack!</button>
      </form>
    </div>   
  );
}

export default QuackerBox;