import React from 'react';
import ColumnQuacks from './ColumnQuacks';
import ColumnBio from './ColumnBio';

function Profile() {
  return (
    <div className="row">
      <div className="col-md-4">
        <ColumnBio />
      </div>
      <div className="col-md-8">
        <ColumnQuacks />
      </div>
    </div>
  );
}

export default Profile;
