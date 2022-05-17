
import { Typography } from '@material-ui/core';
import React from 'react';
import {ThemeProvider, Theme } from '../Theme.js'
import Auth from "../../utils/auth";
//import { Link } from 'react-router-dom';
//import { useQuery } from '@apollo/client';
//import { QUERY_CHILDREN } from '../../utils/queries';


const Welcome = () => {

  
  
  return (
    <>

       <ThemeProvider theme={Theme}>
           <Typography variant='h2' gutterBottom align="center"> 
                Welcome to the Working Mom Assistant!
           </Typography>


           {Auth.loggedIn() ? (
        <>
        
        <div>
        <h2 className="text-primary"> Hi {Auth.getProfile().data.username}, how are you doing today?</h2>
        </div>


        </>
      ) : (
        <p>
          Please Log in or Sign up to create the life balance you need!
        </p>
      )}


           
        </ThemeProvider>
      
    </>
  );
};

export default Welcome;
