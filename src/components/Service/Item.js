import React from "react";
import { Grid, Box, Typography, Card, CardContent, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  avatar: {
    width: "5rem",
    height: "5rem",
  },
});

const ServiceItem = ({ service: { title, brief, thumbnail } }) => {
  const classes = useStyles();

  return (
    <Grid item md={6} lg={4}>
      <Card variant="elevation">
        <CardContent style={{ padding: "2.5rem 1.75rem" }}>
          <Box display="flex" justifyContent="center" mb={3}>
            <Avatar src={thumbnail} alt="" className={classes.avatar} variant="square" />
          </Box>

          <Box mb={2}>
            <Typography component="h6" variant="h5" align="center">
              {title}
            </Typography>
          </Box>

          <Typography variant="body2" component="p" align="center">
            {brief}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceItem;
