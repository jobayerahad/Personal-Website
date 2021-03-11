import { motion } from "framer-motion";
import { Grid, Typography, Card, CardContent, Avatar } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "../../styles/Services.module.scss";

const ServiceItem = ({ service: { title, brief, logo } }) => (
  <Grid item md={6} lg={4} className={styles.card}>
    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "just" }}>
      <Card variant="elevation" className={styles.card}>
        <CardContent style={{ padding: "2.5rem 1.75rem" }}>
          <div className={styles.avatarContainer}>
            <Avatar src={logo && logo.url} alt={logo && logo.hash} className={styles.avatar} variant="square" />
          </div>

          <Typography component="h6" variant="h5" align="center" paragraph>
            {title}
          </Typography>

          <Typography variant="body2" component="p" align="center">
            {brief}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  </Grid>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceItem;
