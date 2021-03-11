import { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { Grid, Typography, TextField, FormHelperText, Button } from "@material-ui/core";
import { IoMdSend } from "react-icons/io";

import Alert from "./Alert";
import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import layoutStyles from "../styles/Layout.module.scss";
import utilityStyles from "../styles/Utilities.module.scss";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      );
      e.target.reset();
      openHandler();
    } catch (error) {
      console.error(error.text);
    }
  };

  setTimeout(() => {
    closeHandler();
  }, 5000);

  return (
    <section style={{ backgroundColor: "#eeeeee" }} name="Contact">
      <div className={layoutStyles.container}>
        <div className={utilityStyles.mb_5}>
          <Typography variant="h2">Get in Touch</Typography>
          <Typography variant="subtitle1">Feel free to contact me anytime</Typography>
        </div>

        <Alert open={open} closeHandler={closeHandler} />

        <FadeInWhenVisible>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  name="name"
                  inputRef={register({ required: true })}
                  fullWidth
                  color="primary"
                  error={errors && errors.name ? true : false}
                  required
                />

                <FormHelperText id="helper-text" error>
                  {errors.name?.message}
                </FormHelperText>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  label="Email"
                  name="email"
                  inputRef={register({ required: true })}
                  fullWidth
                  color="primary"
                  error={errors && errors.email ? true : false}
                  required
                />
                <FormHelperText id="helper-text" error>
                  {errors.email?.message}
                </FormHelperText>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Subject"
                  name="subject"
                  inputRef={register({ required: true })}
                  fullWidth
                  color="primary"
                  error={errors && errors.subject ? true : false}
                  required
                />

                <FormHelperText id="helper-text" error>
                  {errors.subject?.message}
                </FormHelperText>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Message"
                  name="message"
                  inputRef={register({ required: true })}
                  fullWidth
                  color="primary"
                  multiline
                  rows={5}
                  error={errors && errors.message ? true : false}
                  required
                />

                <FormHelperText id="helper-text" error>
                  {errors.message?.message}
                </FormHelperText>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<IoMdSend />}
                  disabled={Object.keys(errors).length !== 0 && true}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Contact;
