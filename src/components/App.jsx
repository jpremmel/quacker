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