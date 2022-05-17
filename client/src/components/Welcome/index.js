
import { Typography } from '@material-ui/core';
import React from 'react';
import {ThemeProvider, Theme } from '../Theme.js'
import Auth from "../../utils/auth";
import workingmom from './workingmom.jpg'



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
        <>
        <h3 className='text-info'>
          Please Log in or Sign up to create the life balance you need!
        </h3>
        <img src={workingmom} className="w-25 mx-auto d-block"></img>
        </>
      )}


           
        </ThemeProvider>
      
    </>
  );
};

export default Welcome;
