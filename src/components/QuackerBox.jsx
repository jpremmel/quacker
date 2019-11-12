import React from 'react';

//Styled with CSS object. This is the way React advocates to implement styling.
function QuackerBox() {
  var quackerBoxStyle = {
    borderColor: '#684949',
    borderRadius: '5px'
  };
  return (
    <div>
      <form> 
        <input 
          style={quackerBoxStyle}
          type="text"/>
        <button 
          style={quackerBoxStyle}
          type="submit">Quack!</button>
      </form>
    </div>   
  );
}

export default QuackerBox;