import React from "react";
import Moment from "react-moment";
import { withStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  Link,
  IconButton,
  Slide,
  Box,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(({ children, classes, onClose, ...other }) => (
  <MuiDialogTitle disableTypography {...other}>
    <Typography variant="h5">{children}</Typography>
    {onClose && (
      <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    )}
  </MuiDialogTitle>
));

const Detail = ({
  portfolio: {
    title,
    description,
    photos: { additional },
    category,
    skills,
    client,
    demoUrl,
    githubUrl,
    completedAt,
  },
  open,
  setOpen,
}) => {
  const closeHandler = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={closeHandler}
      aria-labelledby="portfolio-detail"
      maxWidth="lg"
      scroll="body"
      TransitionComponent={Slide}
    >
      <DialogTitle id="portfolio-title" onClose={closeHandler}>
        {title}
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item md={8}>
            <Carousel showThumbs={false} showStatus={false}>
              {additional.map((photoURL, index) => (
                <div key={index}>
                  <img src={photoURL} alt={title} className="slider__img" />
                </div>
              ))}
            </Carousel>
          </Grid>

          <Grid item md={4}>
            <Box mb={2}>
              <Typography variant="h6" paragraph>
                About The Portfolio
              </Typography>
              <Typography>{description}</Typography>
            </Box>

            <Box mb={2} display="flex" alignItems="center">
              <Typography variant="h6">Category :</Typography>&nbsp;
              <Typography>{category}</Typography>
            </Box>

            <Box mb={2} display="flex" alignItems="center">
              <Typography variant="h6">Skills :</Typography>&nbsp;
              <Typography>{skills}</Typography>
            </Box>

            {client && (
              <Box mb={2} display="flex" alignItems="center">
                <Typography variant="h6">Client :</Typography>&nbsp;
                <Typography>{client}</Typography>
              </Box>
            )}

            <Box mb={2} display="flex" alignItems="center">
              <Typography variant="h6">Completed At :</Typography>&nbsp;
              <Moment date={completedAt} format="DD MMMM, YYYY" />
            </Box>

            {demoUrl && (
              <Box mb={2} display="flex" alignItems="center">
                <Typography variant="h6">Live URL : </Typography>&nbsp;
                <Link href={demoUrl} target="_blank" color="inherit">
                  {demoUrl}
                </Link>
              </Box>
            )}

            {githubUrl && (
              <Box mb={2} display="flex" alignItems="center">
                <Typography variant="h6">Github URL :</Typography>&nbsp;
                <Link href={githubUrl} target="_blank" color="inherit">
                  {githubUrl}
                </Link>
              </Box>
            )}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

Detail.propTypes = {
  portfolio: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Detail;
