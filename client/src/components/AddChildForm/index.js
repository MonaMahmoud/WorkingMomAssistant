import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_CHILD } from '../../utils/mutations';
import { QUERY_CHILDREN } from '../../utils/queries';

import Auth from '../../utils/auth';

const AddChildForm = () => {
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [successMessage, setSucessMessage] = useState('');
  const [characterCount, setCharacterCount] = useState(0);


  

  const [addChild, { error }] = useMutation(ADD_CHILD, {
    update(cache, { data: { addChild } }) {
      try {
        const { children } = cache.readQuery({ query: QUERY_CHILDREN, variables: {username: Auth.getProfile().data.username} });
        if ( children ) {
          cache.writeQuery({
          query: QUERY_CHILDREN,
          data: { children: [addChild, ...children] }, variables: {username: Auth.getProfile().data.username}
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
      

      const { data } = await addChild({
        variables: {
          name: childName,
          age: parseInt (childAge),
          mom: Auth.getProfile().data.username,
        },
      });

      setChildName('');
      setChildAge(0);
      //success = "A new child has been added to your profile!"
      setSucessMessage("A new child has been added to your profile!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'childName' && value.length <= 280) {
      setChildName(value);
      setCharacterCount(value.length);
    }
    else if (name === 'childAge') {
      setChildAge(value);
      //setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Let's get to know your fantastic kids!</h3>

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
                name="childName"
                placeholder="Enter your child name"
                value={childName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

              <textarea
                name="childAge"
                placeholder="Enter your child age"
                value={childAge}
                className="form-input w-25"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Child
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
          You need to be logged in to add a child. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default AddChildForm;
