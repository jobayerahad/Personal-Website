import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Wrapper from "../layout/Wrapper";
import ServiceItem from "./Item";
import { getServices } from "../../store/actions/serviceActions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
  },
}));

const Service = ({ getServices, loading, services }) => {
  const classes = useStyles();

  useEffect(() => {
    getServices();
  }, [getServices]);

  return (
    <section className={classes.root} name="Services">
      {!loading && (
        <Wrapper>
          <Box mb={5}>
            <Typography variant="h2">My Services</Typography>
            <Typography variant="subtitle1">Services i offer to my clients</Typography>
          </Box>

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <ServiceItem service={service} key={index} />
            ))}
          </Grid>
        </Wrapper>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.service.loading,
  services: state.service.services,
});

Service.propTypes = {
  loading: PropTypes.bool.isRequired,
  getServices: PropTypes.func.isRequired,
  services: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { getServices })(Service);
