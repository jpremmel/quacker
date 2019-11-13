import React from 'react';
import PropTypes from 'prop-types';
import quacker1 from '../assets/images/quacker1.jpg';
import quacker2 from '../assets/images/quacker2.jpg';
import quacker3 from '../assets/images/quacker3.jpg';
import quacker4 from '../assets/images/quacker4.jpg';
import quacker5 from '../assets/images/quacker5.jpg';
import quacker6 from '../assets/images/quacker6.jpg';
import quacker7 from '../assets/images/quacker7.jpg';
import quacker8 from '../assets/images/quacker8.jpg';
import quacker9 from '../assets/images/quacker9.jpg';


function Quacker(props) {
  var quackerBioStyle = {
    padding: '10',
    borderColor: '#27253d',
  };
  var quackerImgStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '5px'
  }
  return (
    <div
      style = { quackerBioStyle }
      className = "card" >
      <h3>{props.name}</h3>
      <img style={quackerImgStyle} src={quacker1} />
      <br />
      <p>{props.quackerBio}</p>
    </div>
  );
}

Quacker.propTypes = {
  name: PropTypes.string.isRequired,
  quackerBio: PropTypes.string.isRequired,
  img: PropTypes.string
}

export default Quacker;