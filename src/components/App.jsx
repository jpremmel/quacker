import React from 'react';
import ColumnQuacks from './ColumnQuacks';
import ColumnBio from './ColumnBio';
import Header from './Header';


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
      <div className="row">
        <div className="col-md-4">
          <ColumnBio/> 
        </div>
        <div className="col-md-8">
          <ColumnQuacks/> 
        </div>
      </div>
    </div>
  );
}

export default App;