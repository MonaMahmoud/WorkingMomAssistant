import React from 'react';

//import { Auth } from '../utils/auth';

//import { useQuery } from '@apollo/client';

import Welcome from '../components/Welcome/index'
import ProfileData from '../components/Profile';
// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

const Profile = () => {
  //const { loading, data } = useQuery(QUERY_THOUGHTS);
  //const thoughts = data?.thoughts || [];

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
