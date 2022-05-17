
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";



const Theme = createTheme({
  typography: {
    color: "#FFFFFF",
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
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