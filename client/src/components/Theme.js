//import React from 'react';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

// const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>((props, ref) => {
//   const { href, ...other } = props;
//   // Map href (MUI) -> to (react-router)
//   return <RouterLink ref={ref} to={href} {...other} />;
// });

// const theme = createTheme({
//   components: {
//     MuiLink: {
//       defaultProps: {
//         component: LinkBehavior,
//       },
//     },
//     MuiButtonBase: {
//       defaultProps: {
//         LinkComponent: LinkBehavior,
//       },
//     },
//   },
// });


//import { teal } from '@mui/material/colors';

const Theme = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
 //   color: teal
  }
  
//   components: {
//     MuiLink: {
//       defaultProps: {
//         component: LinkBehavior,
//       },
//     },
//     MuiButtonBase: {
//       defaultProps: {
//         LinkComponent: LinkBehavior,
//       },
//     },
//   },
  
  ,});

  export { ThemeProvider, Theme };