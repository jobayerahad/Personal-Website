import axios from "axios";
import Moment from "react-moment";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { Button, CssBaseline, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { IoMdArrowBack } from "react-icons/io";

import theme from "../../utils/theme";
import Contact from "../../components/Contact";
import Meta from "../../components/layout/Meta";
import Footer from "../../components/layout/Footer";
import styles from "../../styles/Blog.module.scss";
import layoutStyles from "../../styles/Layout.module.scss";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";

const Single = ({ blog: { body, published_at, category, excerpt, thumbnail, title, id }, socialLinks }) => (
  <>
    <Meta title={`${title} - Jobayer Ahad`} description={excerpt} ogUrl={`https://jobayerahad.com/blog/${id}`} />

    <ThemeProvider theme={theme}>
      <CssBaseline />

      <header
        className={styles.header}
        style={{
          backgroundImage: `linear-gradient(rgba(33,33,33,0.25), rgba(33,33,33,0.25)),url('${
            thumbnail && thumbnail.url
          }')`,
        }}
      >
        <div className={layoutStyles.container}>
          <Button variant="outlined" size="large" color="inherit" startIcon={<IoMdArrowBack />}>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>

        <Typography variant="h1" className={styles.headerTitle}>
          {title}
        </Typography>

        <div className={styles.headerMeta}>
          {`${category.title} | `}
          <Moment date={published_at} format="Do MMMM, YYYY" />
        </div>
      </header>

      <div className={layoutStyles.container}>
        <FadeInWhenVisible>
          <Markdown>{body}</Markdown>
        </FadeInWhenVisible>
      </div>

      <Contact />
      <Footer socialLinks={socialLinks} />
    </ThemeProvider>
  </>
);

export async function getStaticPaths() {
  const cmsUrl = process.env.NEXT_PUBLIC_API_URL;

  const blogs = (await axios.get(`${cmsUrl}/blogs`)).data;

  const paths = blogs.map((blog) => `/blog/${blog.id}`);
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const cmsUrl = process.env.NEXT_PUBLIC_API_URL;

  const blog = (await axios.get(`${cmsUrl}/blogs/${params.id}`)).data;
  const socialLinks = (await axios.get(`${cmsUrl}/social`)).data;

  return {
    props: {
      blog,
      socialLinks,
    },
  };
};

export default Single;
