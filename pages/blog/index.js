import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import { Button, Card, CardContent, CssBaseline, Grid, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { ImHome } from "react-icons/im";

import theme from "../../utils/theme";
import Contact from "../../components/Contact";
import Meta from "../../components/layout/Meta";
import Footer from "../../components/layout/Footer";
import styles from "../../styles/Blog.module.scss";
import layoutStyles from "../../styles/Layout.module.scss";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";

const Blog = ({ blogs, socialLinks }) => (
  <>
    <Meta
      title="Blog - Jobayer Ahad"
      description="Love reading? I've some blogs for you which is about the world as my point of view."
      ogUrl="https://jobayerahad.com/blog"
    />

    <ThemeProvider theme={theme}>
      <CssBaseline />

      {blogs[0] && (
        <header
          className={styles.header}
          style={{
            backgroundImage: `linear-gradient(rgba(33,33,33,0.25), rgba(33,33,33,0.25)),url('${
              blogs[0].thumbnail && blogs[0].thumbnail.url
            }')`,
          }}
        >
          <div className={layoutStyles.container}>
            <Button variant="outlined" size="large" color="inherit" startIcon={<ImHome />}>
              <Link href="/">Homepage</Link>
            </Button>
          </div>

          <div className={styles.headerTitle}>
            <Typography paragraph align="center">
              Latest Blog
            </Typography>

            <Typography variant="h1" paragraph>
              {blogs[0].title}
            </Typography>

            <Button variant="outlined" size="large" color="inherit">
              <Link href={`/blog/${blogs[0].id}`}>Read More</Link>
            </Button>
          </div>
        </header>
      )}

      <div className={layoutStyles.container}>
        <FadeInWhenVisible>
          <Grid container spacing={4}>
            {blogs.length !== 0 &&
              blogs.map(({ title, thumbnail, id, excerpt, category }, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card variant="elevation">
                    <Image
                      alt={title}
                      src={thumbnail && thumbnail.formats ? thumbnail.formats.small.url : thumbnail.url}
                      className={styles.img}
                      width="100%"
                      height={75}
                      layout="responsive"
                      objectFit="cover"
                      quality={100}
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h3" component="h2">
                        <Link href={`/blog/${id}`}>{title}</Link>
                      </Typography>

                      {excerpt && <Typography variant="subtitle1">{excerpt}</Typography>}

                      <div className={styles.tags}>
                        Category:
                        <Typography color="textSecondary" style={{ paddingLeft: 5 }}>
                          <Link href={`/blog/?category=${category.id}`}>{category.title}</Link>
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </FadeInWhenVisible>
      </div>

      <Contact />
      <Footer socialLinks={socialLinks} />
    </ThemeProvider>
  </>
);

export const getStaticProps = async () => {
  const cmsUrl = process.env.NEXT_PUBLIC_API_URL;

  const blogs = (await axios.get(`${cmsUrl}/blogs?_sort=published_at:DESC`)).data;
  const socialLinks = (await axios.get(`${cmsUrl}/social`)).data;

  return {
    props: {
      blogs,
      socialLinks,
    },
  };
};

export default Blog;
