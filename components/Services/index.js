import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import ServiceItem from "./Item";
import styles from "../../styles/Services.module.scss";
import layoutStyles from "../../styles/Layout.module.scss";
import utilityStyles from "../../styles/Utilities.module.scss";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";

const Service = ({ services }) => (
  <section className={styles.services} name="Services">
    <div className={layoutStyles.container}>
      <div className={utilityStyles.mb_5}>
        <Typography variant="h2">My Services</Typography>
        <Typography variant="subtitle1">Services i'm offering</Typography>
      </div>

      <FadeInWhenVisible>
        <Grid container spacing={3}>
          {services && services.map((service, index) => <ServiceItem service={service} key={index} />)}
        </Grid>
      </FadeInWhenVisible>
    </div>
  </section>
);

Service.propTypes = {
  services: PropTypes.array.isRequired,
};

export default Service;
