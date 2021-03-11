import { motion } from "framer-motion";
import Typical from "react-typical";
import { Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";

import styles from "../../styles/Header.module.scss";

const variants = {
  title: {
    hidden: { opacity: 0, y: "10vh" },
    visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } },
  },
  subtitle: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.75, duration: 0.5, type: "just" } },
  },
};

const Header = ({ data: { cover, full_name, short_name, designation } }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const typicalsArr = designation
    .split(", ")
    .reduce((r, a) => r.concat(a, 2500), [0])
    .slice(1);

  const name = matches ? full_name : short_name;
  const nameArr = name.split(" ");
  const lastName = nameArr[nameArr.length - 1];
  nameArr.pop();

  return (
    <section
      className={styles.root}
      name="Home"
      style={{
        backgroundImage: `linear-gradient(rgba(33,33,33,0.75), rgba(33,33,33,0.75)),url('${cover && cover.url}')`,
      }}
    >
      <Grid container direction="column" justify="center" alignItems="center" className={styles.content}>
        <motion.div variants={variants.title} initial="hidden" animate="visible">
          <Typography variant="h1" align="center" paragraph className={styles.title}>
            {nameArr.join(" ")} <span>{lastName}</span>
          </Typography>
        </motion.div>

        <motion.div variants={variants.subtitle} initial="hidden" animate="visible">
          <Typical className={styles.subtitle} steps={typicalsArr} loop={Infinity} />
        </motion.div>
      </Grid>
    </section>
  );
};

Header.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Header;
