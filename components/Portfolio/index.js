import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import Summary from "./Summary";
import styles from "../../styles/Portfolio.module.scss";
import layoutStyles from "../../styles/Layout.module.scss";
import utilityStyles from "../../styles/Utilities.module.scss";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";

const Portfolio = ({ portfolios }) => (
  <section className={styles.portfolio} name="Portfolio">
    <div className={layoutStyles.container}>
      <div className={utilityStyles.mb_5}>
        <Typography variant="h2">Portfolio</Typography>
        <Typography variant="subtitle1">Showcasing some of my best work</Typography>
      </div>

      {/* <div className={styles.link}>
        <Link color="primary">All</Link>

        {categories.map(({ key, name }) => (
          <Link color="textSecondary" key={key}>
            {name}
          </Link>
        ))}
      </div> */}

      <FadeInWhenVisible>
        <Grid container spacing={3}>
          {portfolios &&
            portfolios.map((portfolio, index) => <Summary portfolio={portfolio} key={index} index={index} />)}
        </Grid>
      </FadeInWhenVisible>
    </div>
  </section>
);

Portfolio.propTypes = {
  portfolios: PropTypes.array.isRequired,
};

export default Portfolio;
