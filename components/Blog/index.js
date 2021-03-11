import Link from "next/link";
import { Grid, Typography, Button } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "../../styles/Blog.module.scss";
import layoutStyles from "../../styles/Layout.module.scss";
import utilityStyles from "../../styles/Utilities.module.scss";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";
import Summary from "./Summary";

const Blog = ({ blogs }) => (
  <section name="Blog">
    <div className={layoutStyles.container}>
      <div className={utilityStyles.mb_5}>
        <Typography variant="h2">Blog</Typography>
        <Typography variant="subtitle1">Check out my latest blog posts</Typography>
      </div>

      <FadeInWhenVisible>
        <Grid container spacing={3}>
          {blogs.length !== 0 && blogs.map((blog, index) => <Summary blog={blog} key={index} />)}
        </Grid>

        <div className={styles.allBlog}>
          <Button variant="outlined" color="primary" size="large">
            <Link href="/blog">See My All Blogs</Link>
          </Button>
        </div>
      </FadeInWhenVisible>
    </div>
  </section>
);

Blog.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default Blog;
