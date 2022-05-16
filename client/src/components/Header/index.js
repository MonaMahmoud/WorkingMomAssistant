import React from 'react';
import { Link } from 'react-router-dom';

//import { Link as RouterLink } from 'react-router-dom';
//import Link from '@material-ui/core/Link';

import Typography from '@material-ui/core/Typography';
import {ThemeProvider, Theme } from '../Theme.js'

import Auth from '../../utils/auth';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <ThemeProvider theme = { Theme } >
    <header className="bg-dark text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
        <Link className="text-danger" to='/'>
          <h1 className="m-0">
          <Typography>
            Working Mom Assistant!
          </Typography>
          </h1>
        </Link>
          <div className="m-0 text-danger">
          <Typography>
            We know what's on your mind!
            </Typography>
            </div>
            
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
              <Link  className="btn btn-lg btn-danger m-2" to= {`/profile/${Auth.getProfile().data.username}`}>
                Profile
              </Link>

              <Link  className="btn btn-lg btn-danger m-2" to= "/addchild">
                Add Child
              </Link>

              <Link  className="btn btn-lg btn-danger m-2" to= "/addtask">
                Add Task
              </Link>

              
            </>
          ) : (
            <>
              <Link  className="btn btn-lg btn-danger m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
    </ThemeProvider>
  );
};

export default Header;
