import React from 'react';
// Import Link component for all internal application hyperlinks
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';



import { useQuery } from '@apollo/client';
// import { QUERY_CHILDREN } from '../../utils/queries';
// import { QUERY_USER } from '../../utils/queries';
import { QUERY_TASKS } from '../../utils/queries';



const TasksData = () => {

  const { username } = useParams();
    console.log(username);
  const { data } = useQuery(QUERY_TASKS, {
    // pass URL parameter
    variables: { username: username },
  });



  const tasks = data?.tasks || [{ taskDesc:"dummy task" }];

  console.log(tasks);


  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {

    return (

        <>
      
      <div>

        <h2 className="text-primary"> Hi {username}, Here is a list of your tasks:</h2>
  
        {tasks.map((task) => ( <div>{task.taskDesc} {task.createdAt}</div>))}      
        <div>So how many of these are completed? :)</div>

      </div>
      </>
    );

  }

 
};

export default TasksData;
