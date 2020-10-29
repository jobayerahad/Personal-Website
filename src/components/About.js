import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Grid, Typography, Box, Divider, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "./layout/Wrapper";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loadAbout } from "../store/actions/aboutActions";

const useStyles = makeStyles((theme) => ({
  avatar: {
    padding: 5,

    [theme.breakpoints.down("md")]: {
      width: "15rem",
      height: "15rem",
      "& > img": {
        borderRadius: "50%",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "100%",
      "& > img": {
        borderRadius: "0",
      },
    },
  },
  avatarBox: {
    border: `1px solid ${theme.palette.grey[300]}`,
    width: "max-content",

    [theme.breakpoints.down("md")]: {
      borderRadius: "50%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      borderRadius: "5px",
    },
  },
}));

const About = ({ loadAbout, data: { title, brief, thumbnail }, loading }) => {
  const classes = useStyles();

  useEffect(() => {
    loadAbout();
  }, [loadAbout]);

  return (
    <section name="About">
      {!loading && (
        <Wrapper>
          <Box mb={5}>
            <Typography variant="h2">About Me</Typography>
            <Typography variant="subtitle1">Get to know me</Typography>
          </Box>

          <Grid container spacing={5} alignItems="center">
            <Grid item container md={5}>
              <Box className={classes.avatarBox}>
                <Avatar
                  alt="Jobayer Ahad"
                  src={thumbnail}
                  className={classes.avatar}
                  variant="square"
                />
              </Box>
            </Grid>

            <Grid item md={7}>
              <Box mb={3}>
                <Box mb={2}>
                  <Typography component="h6" variant="h3">
                    {title}
                  </Typography>
                </Box>
                <Typography variant="body2">{brief}</Typography>
              </Box>

              <Divider variant="middle" />

              <Box mt={4}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button variant="contained" color="secondary">
                      Download CV
                    </Button>
                  </Grid>
                  <Grid item>
                    <ScrollLink to="Portfolio" spy smooth duration={500}>
                      <Button variant="outlined" color="secondary">
                        My Work
                      </Button>
                    </ScrollLink>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Wrapper>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  data: state.about.data,
  loading: state.about.loading,
});

About.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  loadAbout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loadAbout })(About);
