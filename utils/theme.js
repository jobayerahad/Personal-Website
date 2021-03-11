import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue, red, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightBlue[400],
      main: lightBlue[600],
      dark: lightBlue[800],
    },
    secondary: {
      light: red[400],
      main: red[600],
      dark: red[800],
    },
  },
  typography: {
    h1: {
      fontFamily: ["Crimson Text", "serif"].join(","),
      fontWeight: 500,
      fontSize: "3rem",
      letterSpacing: 1,
      "& > span": {
        color: lightBlue[400],
      },
    },
    h2: {
      fontFamily: ["Crimson Text", "serif"].join(","),
      color: grey[900],
      fontWeight: "bold",
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    h3: {
      fontFamily: ["Crimson Text", "serif"].join(","),
      color: "#111111",
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: ["Crimson Text", "serif"].join(","),
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    h6: {
      fontFamily: ["Crimson Text", "serif"].join(","),
      fontSize: "1rem",
      fontWeight: "bold",
    },
    body2: {
      fontSize: "1rem",
      color: grey[800],
      lineHeight: 1.75,
    },
    subtitle1: {
      color: grey[700],
    },
    caption: {
      fontSize: "1.1rem",
    },
    allVariants: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    },
  },
  overrides: {
    MuiFormHelperText: {
      root: {
        fontSize: "0.8rem",
        textTransform: "capitalize",
      },
    },
  },
});

export default theme;
