import { Link as ScrollLink } from "react-scroll";
import { Grid, Typography, Divider, Button, Avatar, Link } from "@material-ui/core";
import PropTypes from "prop-types";

import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import styles from "../styles/About.module.scss";
import layoutStyles from "../styles/Layout.module.scss";
import utilityStyles from "../styles/Utilities.module.scss";

const About = ({ data: { headline, brief, portrait, cv } }) => (
  <section name="About">
    <div className={layoutStyles.container}>
      <div className={utilityStyles.mb_5}>
        <Typography variant="h2">About Me</Typography>

        <Typography variant="subtitle1" paragraph>
          Get to know me
        </Typography>
      </div>

      <FadeInWhenVisible>
        <Grid container spacing={5} alignItems="center">
          <Grid item container md={5}>
            <div className={styles.avatarContainer}>
              <Avatar
                variant="square"
                alt={portrait && portrait.hash}
                src={portrait && portrait.url}
                className={styles.avatar}
              />
            </div>
          </Grid>

          <Grid item md={7}>
            <div className={utilityStyles.mb_3}>
              <div className={utilityStyles.mb_2}>
                <Typography component="h6" variant="h3">
                  {headline}
                </Typography>
              </div>

              <Typography variant="body2">{brief}</Typography>
            </div>

            <Divider variant="middle" />

            <div className={utilityStyles.mt_4}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button href={cv} component={Link} variant="contained" color="primary" download target="_blank">
                    View CV
                  </Button>
                </Grid>

                <Grid item>
                  <ScrollLink to="Portfolio" spy smooth duration={500}>
                    <Button variant="outlined" color="primary">
                      My Work
                    </Button>
                  </ScrollLink>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </FadeInWhenVisible>
    </div>
  </section>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;
