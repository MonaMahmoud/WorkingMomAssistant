import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import Table from 'react-bootstrap/Table'
import { useQuery } from '@apollo/client';
import { QUERY_CHILDREN } from '../../utils/queries';
import {QUERY_USER} from '../../utils/queries';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
  
  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {

    return (

      <Container>
        <Row>
          <Col>
          <h2 className="text-info"> Hi {username}, how are you doing today?</h2>
          </Col>
          <Col sm={4}>        
          <h5 className='text-secondary'>Username:<strong> {user.username}</strong></h5>
          </Col>
        </Row>
        <Row>
          <Col sm={8}></Col>
          
        </Row>
        <Row>
          <Col sm={8}>

          <h2 className='text-warning m-5 '>And how are your kids doing? :)</h2>

          </Col>
          <Col sm={4}>        
          <h5 className='text-secondary'>Email: <strong>{user.email}</strong></h5>
          </Col>
        </Row>
      
      
      <div>
        <div className='container'>
          <div className='row'>

        </div>
        <div className='row'>
          <div className='column'>
        </div>
        </div>


        </div>

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
      </Container>

      
  
    );

  }

 
};

export default ProfileData;
