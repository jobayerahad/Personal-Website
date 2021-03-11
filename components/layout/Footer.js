import Link from "next/link";
import { Typography, Grid } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
import PropTypes from "prop-types";

import styles from "../../styles/Footer.module.scss";
import layoutStyles from "../../styles/Layout.module.scss";

const Footer = ({ socialLinks }) => (
  <footer className={styles.footer}>
    <div className={`${layoutStyles.container} ${styles.layout}`}>
      <Grid container justify="space-between" alignItems="center" className={styles.grid}>
        <Grid item container className={styles.socialContainer}>
          <Typography>Find me on : </Typography>
          {socialLinks &&
            Object.values(socialLinks).map((url, index) => (
              <SocialIcon
                style={{ height: 25, width: 25, marginLeft: "0.5rem" }}
                fgColor="#fafafa"
                url={url}
                key={index}
                target="_blank"
              />
            ))}
        </Grid>

        <Grid item>
          <Typography align="center">
            &copy; 2020 - {`${new Date().getFullYear()} `}{" "}
            <Link href="/" color="inherit">
              Jobayer Ahad
            </Link>
            , all rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  </footer>
);

Footer.propTypes = {
  socialLinks: PropTypes.object.isRequired,
};

export default Footer;
