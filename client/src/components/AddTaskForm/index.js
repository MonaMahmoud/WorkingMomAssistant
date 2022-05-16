import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';


import { ADD_CHILD } from '../../utils/mutations';
import { ADD_TASK } from '../../utils/mutations';

import { QUERY_SUBCATEGORIES } from '../../utils/queries';

import Auth from '../../utils/auth';

//desc, user, effort, subCat, label 
const AddTaskForm = () => {
  const [taskDesc, setTaskDesc] = useState('');
 // const [taskUser, setTaskUser] = useState('');
  const [taskEffort, setTaskEffort] = useState('');
  const [taskSubCat, setTaskSubCat] = useState('');
  const [taskLabel, setTaskLabel] = useState('');

 // const [childAge, setChildAge] = useState('');
 // const [characterCount, setCharacterCount] = useState(0);


  const [addTask, { error }] = useMutation(ADD_TASK);

  const { subCatData } = useQuery(QUERY_SUBCATEGORIES);

  console.log(subCatData);

  const subCats = subCatData?.subcategories || [{"name": "groceries"},{name: "kids HW"},{name: "paying bills"}];

  console.log (subCats);
  var success = "";


  const [characterCount, setCharacterCount] = useState(0);

  // const [addChild, { error }] = useMutation(ADD_CHILD, {
  //   update(cache, { data: { addChild } }) {
  //     try {
  //       const { children } = cache.readQuery({ query: QUERY_CHILDREN });
  //       if ( children ) {
  //         cache.writeQuery({
  //         query: QUERY_CHILDREN,
  //         data: { children: [addChild, ...children] },
  //       });
  //       }
        
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // console.log("taskUser: "+taskUser);
      // console.log("taskEffort: "+taskEffort);
      // console.log("taskuser: "+Auth.getProfile().data.username);
      // console.log("taskuser: "+Auth.getProfile().data.username);
      // console.log("taskuser: "+Auth.getProfile().data.username);

//desc, user, effort, subCat, label 
//desc, user, effort, label, subCat

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
      success = "A new task has been added to your profile!"
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
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
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


              <select name="taskSubCat" onChange={handleChange}> 
                    <option value="⬇️ Select a fruit ⬇️"> -- Select a subcategory -- </option>
                          {/* Mapping through each fruit object in our fruits array
                        and returning an option element with the appropriate attributes / values.
                      */}
                    {subCats.map((subcat) => <option value={subcat.name}>{subcat.name}</option>)}
                  </select>

              <textarea
                name="taskEffort"
                placeholder="Enter the effort you estimate this task will need (between 1 and 100)"
                value={taskEffort}
                className="form-input w-25"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

              <textarea
                name="taskLabel"
                placeholder="Enter a label for this task (optional)"
                value={taskLabel}
                className="form-input w-25"
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

            
              <div className="col-12 my-3 p-3">
                { success }
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
