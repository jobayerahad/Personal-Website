import { createMuiTheme } from "@material-ui/core/styles";
import { blue, red, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[400],
      main: blue[600],
      dark: blue[800],
    },
    secondary: {
      light: red[400],
      main: red[600],
      dark: red[800],
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: "4rem",
      letterSpacing: 1,
      "& > span": {
        color: red[600],
      },
    },
    h2: {
      color: grey[900],
      fontWeight: "bold",
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
    h3: {
      color: "#111111",
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: 1.75,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
    h6: {
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
