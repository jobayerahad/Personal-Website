import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "./layout/Wrapper";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url('/assets/images/background.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  grid: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  textContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "2rem",
      textAlign: "center",
    },
  },
  title: {
    color: theme.palette.grey[100],
  },
  subtitle: {
    color: theme.palette.grey[400],
  },
}));

const Hire = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Wrapper>
        <Grid container justify="space-between" alignItems="center" className={classes.grid}>
          <Grid item className={classes.textContainer}>
            <Typography variant="h2" className={classes.title}>
              Let's work together!
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              I am available for freelance projects. Hire me and get your project done.
            </Typography>
          </Grid>

          <Grid item>
            <ScrollLink to="Contact" spy smooth duration={500}>
              <Button variant="contained" color="secondary">
                Hire Me
              </Button>
            </ScrollLink>
          </Grid>
        </Grid>
      </Wrapper>
    </section>
  );
};

export default Hire;
