import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  backgroundColor: '#111',
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
      dark: '#0d8aed',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#750000',
      dark: '#4a0000',
      contrastText: '#000000',
    },
    background: {
      default: '#161519',
      paper: '#333',
    },
    text: {
      primary: '#fff',
      secondary: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
  },
  select: {
    /* Reset Select */
    appearance: "none",
    outline: 0,
    border: 0,
    boxShadow: "none",
    /* Personalize */
    flex: 1,
    padding: "0 1em",
    color: "#fff",
    backgroundColor: "1d1d1d",
    backgroundImage: "none",
    cursor: "pointer",
    /* Remove IE arrow */
    "::-ms-expand": {
      display: "none"
    },
  // },
  // ".select": {
    position: "relative",
    display: "flex",
    width: "20em",
    height: "3em",
    borderRadius: ".25em",
    overflow: "hidden",
    /* Arrow */
    "&::after": {
      content: "'\\25BC'",
      position: "absolute",
      top: 0,
      right: 0,
      padding: "1em",
      backgroundColor: "#34495e",
      transition: ".25s all ease",
      pointerEvents: "none"
    },
    /* Transition */
    "&:hover::after": {
      color: "#f39c12"
    }
  },
  /* Other styles*/
  // body: {
  //   color: "#fff",
  //   background: "var(--background-gradient)"
  // },
  // h1: {
  //   margin: "0 0 0.25em"
  // },
  // a: {
  //   fontWeight: "bold",
  //   color: "var(--gray)",
  //   textDecoration: "none",
  //   padding: ".25em",
  //   borderRadius: ".25em",
  //   background: "white"
  // }
});

export default theme;