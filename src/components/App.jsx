import React from 'react';
import Profile from './Profile';
import Homepage from './Homepage';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';


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
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  );
}

export default App;