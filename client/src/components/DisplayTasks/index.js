import React from 'react';
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import Table from 'react-bootstrap/Table'
import { useQuery } from '@apollo/client';
import { QUERY_TASKS } from '../../utils/queries';



const TasksData = () => {

  const { username } = useParams();
    console.log(username);
  const { data } = useQuery(QUERY_TASKS, {
    // pass URL parameter
    variables: { username: username },
  });



  const tasks = data?.tasks || [{ taskDesc:"dummy task" }];

  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {

    return (

        <>
      
      <div>

        <h2 className="m-5 text-info"> Hi {username}, here is a list of your tasks:</h2>


        <Table striped bordered hover responsive variant='dark'>  
        <thead>
            <tr>  
                <th>Desctiption</th>  
                <th>Subcategory</th>  
                <th>Estimated Effort</th>  
                <th>Label</th>  
                <th>Created At</th>  

            </tr>  
            </thead>

            <tbody>
            {tasks.map((task) => (  
              <tr data-index={task._id}>  
                <td>{task.taskDesc}</td>  
                <td>{task.taskSubCategory}</td>  
                <td>{task.taskEffort}</td>  
                <td>{task.taskLabel}</td>  
                <td>{task.createdAt}</td>  

              </tr>  
            ))}
            </tbody>  
    
        </Table>  
  
        <h3 className='text-danger m-auto'>So how many of these are completed? :)</h3>

      </div>
      </>
    );

  }

 
};

export default TasksData;
