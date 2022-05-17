import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider, Theme, WhiteTextTypography } from '../Theme.js'

//import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={Theme}>

    <footer className="w-100 mt-auto bg-dark p-4">

      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-danger mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
       
        <WhiteTextTypography variant="h4" gutterBottom>
          Made with{' '}
          </WhiteTextTypography>
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}

          <br/><br/>
          <WhiteTextTypography variant="h4" gutterBottom>

          by a working mom
          </WhiteTextTypography>
        
      </div>
    </footer>
    </ThemeProvider>
  );
};

export default Footer;
