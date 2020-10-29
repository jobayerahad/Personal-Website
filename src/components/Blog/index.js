import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Wrapper from "../layout/Wrapper";
import Summary from "./Summary";
import { getBlogs } from "../../store/actions/blogActions";

const Blog = ({ getBlogs, blogs, loading }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <section name="Blog">
      <Wrapper>
        <Box mb={5}>
          <Typography variant="h2">Blog</Typography>
          <Typography variant="subtitle1">Check out my latest blog posts</Typography>
        </Box>

        <Grid container spacing={3}>
          {!loading && blogs.map((blog, index) => <Summary blog={blog} key={index} />)}
        </Grid>
      </Wrapper>
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.blog.loading,
  blogs: state.blog.blogs,
});

Blog.propTypes = {
  loading: PropTypes.bool.isRequired,
  getBlogs: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { getBlogs })(Blog);
