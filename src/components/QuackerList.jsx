import React from 'react';
import Quacker from './Quacker';
import quacker1 from '../assets/images/quacker1.jpg';
import quacker2 from '../assets/images/quacker2.jpg';
import quacker3 from '../assets/images/quacker3.jpg';
import quacker4 from '../assets/images/quacker4.jpg';
import quacker5 from '../assets/images/quacker5.jpg';
import quacker6 from '../assets/images/quacker6.jpg';
import quacker7 from '../assets/images/quacker7.jpg';
import quacker8 from '../assets/images/quacker8.jpg';
import quacker9 from '../assets/images/quacker9.jpg';

var masterQuackerList = [
  {
    name: 'Elliott',
    quackerBio: 'Hello all you quacks... come quack with me!',
    img: quacker1
  },
  {
    name: 'Stan',
    quackerBio: 'I enjoy long walks on the beach and some occassional breadcrumbs',
    img: quacker2
  },
  {
    name: 'Sterling',
    quackerBio: 'Whats there to quack about?',
    img: quacker3
  },
  {
    name: 'Tyler',
    quackerBio: 'Chillin with my quackers',
    img: quacker4
  },
  {
    name: 'Martha',
    quackerBio: 'Dont quack back!',
    img: quacker5
  },
  {
    name: 'Mike',
    quackerBio: 'Quackin on the fly',
    img: quacker6
  },
  {
    name: 'Joel',
    quackerBio: 'Update to date with all the newest quacks',
    img: quacker7
  },
  {
    name: 'Chris',
    quackerBio: 'Quackin with my homies',
    img: quacker8
  },
  {
    name: 'Stephaan',
    quackerBio: 'Quack and Chill?',
    img: quacker9
  }
];

function QuackerList() {
  var quackerListStyle = {
    borderColor: '#27253d',
    padding: '20px'
  };
  return (
    <div
      style={quackerListStyle}
      className="card">
      {masterQuackerList.map((quacker, index) =>
        <Quacker 
          name={quacker.name}
          quackerBio={quacker.quackerBio}
          img={quacker.img}
          key={index} />
      )}
    </div>
  );
}

export default QuackerList;