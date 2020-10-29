import React, { useEffect } from "react";
import Typical from "react-typical";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "./layout/Header";
import About from "./About";
import Service from "./Service";
import Hire from "./Hire";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";

import { loadProfile } from "../store/actions/profileActions";
import { Backdrop, CircularProgress, Typography, Box } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Landing = ({ loadProfile, loading }) => {
  const classes = useStyles();

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const msgArray = [
    "Nice To See You",
    "Hi, I'm Ahad.",
    "Hope you're having a nice day",
    "As-salamu alaykum",
  ];

  return (
    <>
      {loading ? (
        <Backdrop open className={classes.backdrop}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <CircularProgress color="inherit" size={100} />
            <Typography variant="h2" component="div" color="inherit">
              <Typical
                steps={[
                  msgArray[Math.floor(Math.random() * msgArray.length)],
                  300,
                  msgArray[Math.floor(Math.random() * msgArray.length)],
                  300,
                ]}
                loop={Infinity}
              />
            </Typography>
          </Box>
        </Backdrop>
      ) : (
        <>
          <Sidebar drawerWidth={drawerWidth} />

          <main className={classes.content}>
            <Header />
            <About />
            <Service />
            <Hire />
            <Portfolio />
            <Blog />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.profile.loading,
});

Landing.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadProfile: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loadProfile })(Landing);
