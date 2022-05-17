import React from 'react';
// Import Link component for all internal application hyperlinks
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import Table from 'react-bootstrap/Table'
import { useQuery } from '@apollo/client';
import { QUERY_CHILDREN } from '../../utils/queries';
import {QUERY_USER} from '../../utils/queries';




const ProfileData = () => {

  const { username } = useParams();

  var { data } = useQuery(QUERY_CHILDREN, {
    // pass URL parameter
    variables: { username: username },
  });

  const children = data?.children || [];

   data  = useQuery(QUERY_USER, {
    // pass URL parameter
    variables: { username: username },
  }).data;


  const user = data?.user || { username:"dummy user", email:"anyemail@domain.com"};
  console.log(data);
  
  // const { loading, data } = useQuery( QUERY_CHILDREN, {
  //   variables: { username },
  // });


  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {

    return (


      
      <div>
        <h2 className="text-primary"> Hi {username}, how are you doing today?</h2>

        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>

        <div>So how are your kids doing? :)</div>



        <Table striped bordered hover responsive >  
        <thead>
        <tr>  
                <th>Name</th>  
                <th>Age</th> 
            </tr>  
        </thead>
        <tbody>
        {children.map((child) => (  
              <tr data-index={child._id}>  
                <td>{child.name}</td>  
                <td>{child.age}</td>  

              </tr>  
            ))}
        </tbody>
        </Table>
  
  
        <Link className="btn btn-lg btn-info m-2" to= {`/tasks/${Auth.getProfile().data.username}`}>
                Click to View Your Tasks
        </Link>

        <Link className="btn btn-lg btn-info m-2" to= {`/balance/${Auth.getProfile().data.username}`}>
                Click to Check Your Task Balance
        </Link>

      </div>
  
      
  
    );

  }

 
};

export default ProfileData;
