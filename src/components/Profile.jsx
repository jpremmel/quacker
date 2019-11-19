import React from 'react';
import ColumnQuacks from './ColumnQuacks';
import ColumnBio from './ColumnBio';
import PropTypes from 'prop-types';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quackSubmitted: false
    };
  }

  // handleNewQuackSubmission() {
  //   console.log(quack);
  //   this.setState({ quackSubmitted: true });
  // }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <ColumnBio 
          onNewQuackCreation={this.props.onNewQuackCreation} />
        </div>
        <div className="col-md-8">
          <ColumnQuacks
            quackHistory={this.props.quackHistory} />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  quackHistory: PropTypes.array,
  onNewQuackCreation: PropTypes.func
};

export default Profile;
