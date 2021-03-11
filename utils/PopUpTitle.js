import { IconButton, Typography } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

import styles from "../styles/Utilities.module.scss";

const PopUpTitle = ({ children, classes, onClose, ...other }) => (
  <MuiDialogTitle disableTypography {...other}>
    <Typography variant="h6">{children}</Typography>

    {onClose && (
      <IconButton aria-label="close" className={styles.closeButton} onClick={onClose}>
        <AiFillCloseCircle />
      </IconButton>
    )}
  </MuiDialogTitle>
);

PopUpTitle.propTypes = {
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.object,
};

export default PopUpTitle;
