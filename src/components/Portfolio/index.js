import React, { useEffect } from "react";
import { Grid, Box, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Wrapper from "../layout/Wrapper";
import Summary from "./Summary";
import { getPortfolios, getCategories } from "../../store/actions/portfolioActions";

const useStyles = makeStyles({
  root: {
    backgroundColor: grey[200],
  },
  link: {
    "& > *": {
      marginRight: "1rem",
    },
  },
});

const Portfolio = ({ getPortfolios, getCategories, loading, portfolios, categories }) => {
  const classes = useStyles();

  useEffect(() => {
    getPortfolios();
    getCategories();
  }, [getPortfolios, getCategories]);

  return (
    <section className={classes.root} name="Portfolio">
      <Wrapper>
        <Box mb={5}>
          <Typography variant="h2">Portfolio</Typography>
          <Typography variant="subtitle1">Showcasing some of my best work</Typography>
        </Box>

        <Box mb={1} className={classes.link}>
          <Link color="secondary">All</Link>
          {categories.map(({ key, name }) => (
            <Link color="textSecondary" key={key}>
              {name}
            </Link>
          ))}
        </Box>

        <Grid container spacing={3}>
          {!loading &&
            portfolios.map((portfolio, index) => (
              <Summary portfolio={portfolio} key={index} index={index} />
            ))}
        </Grid>
      </Wrapper>
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.portfolio.loading,
  portfolios: state.portfolio.portfolios,
  categories: state.portfolio.categories,
});

Portfolio.propTypes = {
  getPortfolios: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  portfolios: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { getPortfolios, getCategories })(Portfolio);
