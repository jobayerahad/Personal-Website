import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Avatar, Button, Box, Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { downloadFile } from "../utils/apiRequests";

const useStyles = makeStyles((theme) => ({
  root: { height: "100vh" },
  avatar: {
    height: "auto",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const NotFound = () => {
  const classes = useStyles();

  const [imgUrl, setImgUrl] = useState("");
  downloadFile("assets/not-found.png").then((url) => setImgUrl(url));

  const { goBack } = useHistory();

  return (
    <>
      {imgUrl !== "" ? (
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          className={classes.root}
        >
          <Avatar src={imgUrl} alt="Not Found" variant="square" className={classes.avatar} />

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ArrowBackIosIcon />}
              onClick={goBack}
            >
              Go Back
            </Button>
          </Box>
        </Grid>
      ) : (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default NotFound;
