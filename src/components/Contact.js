import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Grid,
  Box,
  Typography,
  TextField,
  FormHelperText,
  Button,
  CircularProgress,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Wrapper from "./layout/Wrapper";
import { sendMessage } from "../store/actions/contactActions";

const schema = yup.object().shape({
  name: yup.string().required("Tell me your name"),
  email: yup.string().email().required("How can I find you without your email?"),
  subject: yup
    .string()
    .required("What is the topic?")
    .test("len", "Please Write at least 20 characters", (val) => val.length >= 20),
  message: yup
    .string()
    .required("Write something. It shouldn't be blank")
    .test("len", "Please Write at least 50 characters", (val) => val.length >= 50),
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
  },
  button: {
    position: "relative",
  },
  progress: {
    position: "absolute",
    top: "30%",
    left: "40%",
  },
}));

const Contact = ({ sendMessage, loading }) => {
  const classes = useStyles();

  const recaptchaRef = useRef();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data, e) => {
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    sendMessage(data, token);
    e.target.reset();
  };

  return (
    <section className={classes.root} name="Contact">
      <Wrapper>
        <Box mb={5}>
          <Typography variant="h2">Get in Touch</Typography>
          <Typography variant="subtitle1">Feel free to contact me anytime</Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField label="Name" name="name" inputRef={register} fullWidth color="secondary" />
              <FormHelperText id="helper-text" error>
                {errors.name?.message}
              </FormHelperText>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                name="email"
                inputRef={register}
                fullWidth
                color="secondary"
              />
              <FormHelperText id="helper-text" error>
                {errors.email?.message}
              </FormHelperText>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Subject"
                name="subject"
                inputRef={register}
                fullWidth
                color="secondary"
              />
              <FormHelperText id="helper-text" error>
                {errors.subject?.message}
              </FormHelperText>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                inputRef={register}
                fullWidth
                color="secondary"
                multiline
                rows={5}
              />
              <FormHelperText id="helper-text" error>
                {errors.message?.message}
              </FormHelperText>
            </Grid>

            <Grid item xs={12}>
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.REACT_APP_RECAPTCHA_CLIENT_KEY}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                startIcon={<SendIcon />}
                className={classes.button}
                disabled={loading}
              >
                Send
                {loading && (
                  <CircularProgress color="secondary" size="1rem" className={classes.progress} />
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Wrapper>
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.contact.loading,
});

Contact.propTypes = {
  loading: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { sendMessage })(Contact);
