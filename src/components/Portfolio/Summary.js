import React, { useState } from "react";
import { Grid, Box, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Detail from "./Detail";

const useStyles = makeStyles(() => ({
  img: {
    width: "100%",
    height: "100%",
  },
}));

const Summary = ({ portfolio }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <Grid item md={6} lg={4}>
      <figure className="gallery" onClick={() => setOpen(true)}>
        <Avatar
          alt={portfolio.title}
          src={portfolio.photos.thumbnail}
          className={classes.img}
          variant="square"
        />

        <figcaption className="gallery__caption">
          <Box>
            <Typography variant="h4" color="inherit">
              {portfolio.title}
            </Typography>
            <Typography color="secondary">{portfolio.category}</Typography>
          </Box>
        </figcaption>
      </figure>

      <Detail open={open} setOpen={setOpen} portfolio={portfolio} />
    </Grid>
  );
};

Summary.propTypes = {
  portfolio: PropTypes.object.isRequired,
};

export default Summary;
