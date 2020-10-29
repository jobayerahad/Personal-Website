import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    [theme.breakpoints.up("xs")]: {
      padding: "3.5rem 1.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "35rem",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "55rem",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "65rem",
      padding: "5rem 0",
    },
  },
}));

const Wrapper = ({ children, style }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={style}>
      {children}
    </div>
  );
};

export default Wrapper;
