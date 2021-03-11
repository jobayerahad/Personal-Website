import { Button, Dialog, DialogContent, Typography, Zoom } from "@material-ui/core";
import { AiFillCheckCircle } from "react-icons/ai";

import styles from "../styles/Alert.module.scss";

const Alert = ({ open, closeHandler }) => (
  <Dialog
    open={open}
    onClose={closeHandler}
    aria-labelledby="success message"
    maxWidth="xs"
    fullWidth
    scroll="body"
    TransitionComponent={Zoom}
  >
    <DialogContent className={styles.container} dividers>
      <AiFillCheckCircle className={styles.icon} />

      <div className={styles.text}>
        <Typography variant="h3" component="p" gutterBottom>
          I've got your message.
        </Typography>

        <Typography variant="subtitle2">I'll get back to you soon!</Typography>
      </div>

      <Button variant="outlined" color="primary" onClick={closeHandler} fullWidth>
        Okay
      </Button>
    </DialogContent>
  </Dialog>
);

export default Alert;
