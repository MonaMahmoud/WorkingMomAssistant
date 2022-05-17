import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {ThemeProvider, Theme, WhiteTextTypography } from '../Theme.js'



const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={Theme}>

    <footer className="w-100 mt-auto bg-dark p-3">

      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-lg btn-danger m-2"
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
