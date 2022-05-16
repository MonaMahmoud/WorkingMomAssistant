import React from 'react';
// Import Link component for all internal application hyperlinks
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';



import { useQuery } from '@apollo/client';
import { QUERY_CHILDREN } from '../../utils/queries';
import {QUERY_USER} from '../../utils/queries';




const ProfileData = () => {

  const { username } = useParams();

  const { data } = useQuery(QUERY_CHILDREN, {
    // pass URL parameter
    variables: { username: username },
  });

  const { userData } = useQuery(QUERY_USER, {
    // pass URL parameter
    variables: { username: username },
  });

  const children = data?.children || [];

  const user = userData?.user || { username:"dummy user", email:"anyemail@domain.com"};

  
  // const { loading, data } = useQuery( QUERY_CHILDREN, {
  //   variables: { username },
  // });


  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {

    return (


      
      <div>
        <h2 className="text-primary"> Hi {username}, how are you doing today?</h2>

        <div>Your username: {user.username}</div>
        <div>Your email: {user.email}</div>

        <div>So how are your kids doing? :)</div>
  
        {children.map((child) => ( <div>{child.name} {child.age}</div>))}      
  
        <Link className="btn btn-lg btn-info m-2" to= {`/tasks/${Auth.getProfile().data.username}`}>
                Click to View Your Tasks
        </Link>
      </div>
  
      
  
    );

  }

 
};

export default ProfileData;
