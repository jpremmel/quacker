import React from 'react';
import QuackHistory from './QuackHistory';
import QuackerBox from './QuackerBox';
import Header from './Header';
import Bio from './Bio';

function App() {
  return(
    <div>
      <style global jsx>{`
        body {
          font-family: sans-serif;
          background-color: #f5f5c6;
        }
      `}</style>
      <Header/>
      <Bio/>
      <QuackerBox/>
      <QuackHistory/> 
    </div>
  );
}

export default App;