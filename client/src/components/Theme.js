//import React from 'react';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


//import { teal } from '@mui/material/colors';

const Theme = createTheme({
  typography: {
    color: "#FFFFFF",
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
 //   color: teal
  }
  
  ,});

  const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF",
      fontFamily: [
        'Chilanka',
        'cursive',
      ]
    }
  })(Typography);

  export { ThemeProvider, Theme, WhiteTextTypography };