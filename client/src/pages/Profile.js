import React from 'react';
import ProfileData from '../components/Profile';

const Profile = () => {
 
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ProfileData />
        </div>
      </div>
    </main>
  );
};

export default Profile;
