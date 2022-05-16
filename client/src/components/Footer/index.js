import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider, Theme } from '../Theme.js'

//import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={Theme}>

    <footer className="w-100 mt-auto bg-secondary p-4">

      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
       
        <Typography variant="h4" gutterBottom>
          Made with{' '}
          </Typography>
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}

          <br/><br/>
          <Typography variant="h4" gutterBottom>

          by a working mom
          </Typography>
        
      </div>
    </footer>
    </ThemeProvider>
  );
};

export default Footer;
