import { Link as ScrollLink } from "react-scroll";
import { Typography, Grid, Button } from "@material-ui/core";
import { FaPeopleCarry } from "react-icons/fa";

import styles from "../styles/Hire.module.scss";
import layoutStyles from "../styles/Layout.module.scss";

const Hire = () => (
  <section className={styles.hire}>
    <div className={layoutStyles.container}>
      <Grid container justify="space-between" alignItems="center" className={styles.grid}>
        <Grid item className={styles.textContainer}>
          <Typography variant="h2" className={styles.title}>
            Let's work together!
          </Typography>

          <Typography variant="subtitle1" className={styles.subtitle} paragraph>
            I am available for freelance projects. Hire me and get your project done.
          </Typography>
        </Grid>

        <Grid item>
          <ScrollLink to="Contact" spy smooth duration={500}>
            <Button variant="contained" color="primary" startIcon={<FaPeopleCarry />}>
              Hire Me
            </Button>
          </ScrollLink>
        </Grid>
      </Grid>
    </div>
  </section>
);

export default Hire;
