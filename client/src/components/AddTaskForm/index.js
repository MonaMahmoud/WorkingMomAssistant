import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { ADD_TASK } from '../../utils/mutations';
import { QUERY_SUBCATEGORIES, QUERY_TASKS } from '../../utils/queries';
import Auth from '../../utils/auth';

const AddTaskForm = () => {
  const [taskDesc, setTaskDesc] = useState('');
  const [taskEffort, setTaskEffort] = useState('');
  const [taskSubCat, setTaskSubCat] = useState('');
  const [taskLabel, setTaskLabel] = useState('');
  const [successMessage, setSucessMessage] = useState('');
  const { data } = useQuery(QUERY_SUBCATEGORIES);
  const subCats = data?.subcategories || [{"name": "groceries"},{name: "kids HW"},{name: "paying bills"}];


  const [addTask, { error }] = useMutation(ADD_TASK, {
    update(cache, { data: { addTask } }) {
      try {
        const { tasks } = cache.readQuery({ query: QUERY_TASKS, variables: {username: Auth.getProfile().data.username} });
        if ( tasks ) {
          cache.writeQuery({
          query: QUERY_TASKS,
          data: { tasks: [addTask, ...tasks] }, variables: {username: Auth.getProfile().data.username}
        });
        }
        
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
     
      const { data } = await addTask({
        variables: {
          "taskDesc": taskDesc,
          "taskEffort": parseInt (taskEffort),
          "taskSubCategory": taskSubCat,
          "taskLabel": taskLabel,
          "taskUser": Auth.getProfile().data.username,
        },
      });
      
      setTaskDesc('');
      setTaskEffort(0);
      setTaskSubCat('');
      setTaskLabel('')
      setSucessMessage("A new task has been added to your profile!");

    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if ( name === 'taskDesc' ) {
      setTaskDesc(value);
    }
    else if ( name === 'taskSubCat') {
      setTaskSubCat(value);
    }
    else if ( name === 'taskLabel' ) {
      setTaskLabel(value);
    }
    else if ( name === 'taskEffort' ) {
      setTaskEffort(value);
    }
  };

  return (
    <div>
      <h3>Let's add some tasks to be done!</h3>

      {Auth.loggedIn() ? (
        <>
          
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="taskDesc"
                placeholder="Enter your task description"
                value={taskDesc}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>


              <select name="taskSubCat" onChange={handleChange} className="form-select col-12 col-lg-9"> 
                    <option value="⬇️ Select a subcategory ⬇️"> -- Select a subcategory -- </option>
                          {/* Mapping through each fruit object in our fruits array
                        and returning an option element with the appropriate attributes / values.
                      */}
                    {subCats.map((subcat) => <option value={subcat.name}>{subcat.name}</option>)}
                  </select>

              <textarea
                name="taskEffort"
                placeholder="Enter the effort you estimate this task will need (a number between 1 and 100)"
                value={taskEffort}
                className="form-input "
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

              <textarea
                name="taskLabel"
                placeholder="Enter a label for this task (optional)"
                value={taskLabel}
                className="form-input "
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Task
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}

            
              <div className="col-12 my-3 p-3" name="successMessage">
                { successMessage }
              </div>
            
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a task. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default AddTaskForm;
