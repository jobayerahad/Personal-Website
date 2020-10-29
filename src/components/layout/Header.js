import React from "react";
import Typical from "react-typical";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: grey[100],
  },
  content: {
    height: "100%",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    fontSize: "2rem",
    letterSpacing: 1,
    "& > p": {
      marginLeft: 10,
    },
  },
});

const Header = ({ data: { cover, fullName, typicalTexts } }) => {
  const classes = useStyles();

  const typicalsArr = typicalTexts.reduce((r, a) => r.concat(a, 2500), [0]).slice(1);

  const nameArr = fullName.split(" ");
  const lastName = nameArr[nameArr.length - 1];
  nameArr.pop();

  return (
    <section
      className={classes.root}
      name="Home"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),url('${cover}')`,
      }}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.content}
      >
        <Typography variant="h1" align="center">
          {nameArr.join(" ")} <span>{lastName}</span>
        </Typography>

        <Typography variant="subtitle2" className={classes.subtitle}>
          <Typical steps={typicalsArr} loop={Infinity} />
        </Typography>
      </Grid>
    </section>
  );
};

const mapStateToProps = (state) => ({
  data: state.profile.banner,
});

Header.propTypes = {
  data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Header);
