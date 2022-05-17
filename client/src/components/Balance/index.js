import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import { useQuery } from '@apollo/client';
import { QUERY_TASKS } from '../../utils/queries';
import { QUERY_BALANCE } from '../../utils/queries';



const BalanceResults = () => {


    const { username } = useParams();
  const { data } = useQuery(QUERY_BALANCE, {
    // pass URL parameter
    variables: { username: username },
  });



  const balance = data?.balance || [];

  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {

    return (

        <>
      <div>

        <h2 className="m-5 text-info"> Hi {username}, here is a summary of your work-life balance:</h2>


        <Table striped bordered hover responsive variant='dark'>  
        <thead>
            <tr>  
                <th>Work Tasks</th>  
                <th>Life Tasks</th>  
                <th>Work Effort</th>  
                <th>Life Effort</th>  

            </tr>  
            </thead>

            <tbody>

            <tr >
                <td>{balance.workTasks}</td>
                <td>{balance.lifeTasks}</td>
                <td>{balance.workEffort}</td>
                <td>{balance.lifeEffort}</td>

            </tr>


            
            </tbody>  
    
        </Table>  
  
        <h3 className='text-danger m-auto'>Do you think you should make adjustments? :)</h3>

      </div>
      </>
    );

  }

};

export default BalanceResults;
