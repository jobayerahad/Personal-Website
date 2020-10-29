import React, { useEffect } from "react";
import { Typography, Link, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey, blue, red, purple, indigo } from "@material-ui/core/colors";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Wrapper from "./Wrapper";
import { loadSocialLinks } from "../../store/actions/settingsActions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    borderLeft: `1px solid ${grey[600]}`,
    color: grey[400],
  },
  grid: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  socialContainer: {
    width: "max-content",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1rem",
    },
  },
  social: {
    color: grey[100],
    borderRadius: 5,
    overflow: "hidden",
    marginRight: "1rem",
    "& svg": {
      verticalAlign: "middle",
      padding: 4,
    },
  },
}));

const Footer = ({
  loadSocialLinks,
  socialLinks: { facebook, twitter, linkedin, youtube, github },
  loading,
}) => {
  const classes = useStyles();

  useEffect(() => {
    loadSocialLinks();
  }, [loadSocialLinks]);

  const socialItems = [
    {
      component: <FacebookIcon style={{ backgroundColor: indigo[900] }} />,
      link: facebook,
    },
    {
      component: <TwitterIcon style={{ backgroundColor: blue[300] }} />,
      link: twitter,
    },
    {
      component: <LinkedInIcon style={{ backgroundColor: blue[700] }} />,
      link: linkedin,
    },
    {
      component: <GitHubIcon style={{ backgroundColor: purple[900] }} />,
      link: github,
    },
    {
      component: <YouTubeIcon style={{ backgroundColor: red.A700 }} />,
      link: youtube,
    },
  ];

  return (
    <footer className={classes.root}>
      <Wrapper style={{ padding: "2rem 0" }}>
        <Grid container justify="space-between" alignItems="center" className={classes.grid}>
          <Grid item container className={classes.socialContainer}>
            {!loading &&
              socialItems.map((socialItem, index) => (
                <Box className={classes.social} key={index}>
                  <Link href={socialItem.link} color="inherit" target="_blank">
                    {socialItem.component}
                  </Link>
                </Box>
              ))}
          </Grid>

          <Grid item>
            <Typography align="center">
              Copyright &copy; {`${new Date().getFullYear()} `}{" "}
              <RouterLink to="/" color="inherit">
                Jobayer Ahad
              </RouterLink>
              , all rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Wrapper>
    </footer>
  );
};

const mapStateToProps = (state) => ({
  loading: state.settings.loading,
  socialLinks: state.settings.socialLinks,
});

Footer.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadSocialLinks: PropTypes.func.isRequired,
  socialLinks: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { loadSocialLinks })(Footer);
