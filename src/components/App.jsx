import React from 'react';
import Profile from './Profile';
import Homepage from './Homepage';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import QuackHistory from './QuackHistory';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterQuackList: []
    };
    this.handleAddingNewQuackToList = this.handleAddingNewQuackToList.bind(this);
  }

  handleAddingNewQuackToList(newQuack){
    console.log(newQuack);
    var newMasterQuackList = this.state.masterQuackList.slice();
    newMasterQuackList.push(newQuack);
    this.setState({ masterQuackList: newMasterQuackList });
  }

  render(){
    return (
      <div>
        <style global jsx>{`
        body {
          font-family: sans-serif;
          background-color: #f5f5c6;
        }
      `}</style>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/profile' render={() => <Profile 
            quackHistory={this.state.masterQuackList}
            onNewQuackCreation={this.handleAddingNewQuackToList}
          />} />
        </Switch>
      </div>
    );

  }
 
}

export default App;