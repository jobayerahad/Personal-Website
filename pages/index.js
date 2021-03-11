import axios from "axios";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import styles from "../styles/Home.module.scss";
import theme from "../utils/theme";

import Meta from "../components/layout/Meta";
import Header from "../components/layout/Header";
import TopBar from "../components/layout/TopBar";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import About from "../components/About";
import Services from "../components/Services";
import Hire from "../components/Hire";
import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = ({ about, profile, services, socialLinks, blogs, portfolios }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Meta description={about && about.brief} />

      <ThemeProvider theme={theme}>
        <CssBaseline />

        {matches ? <Sidebar drawerWidth={240} data={profile} /> : <TopBar data={profile} />}

        <div className={styles.content}>
          <Header data={profile} />

          <main>
            <About data={about} />
            <Services services={services} />
            <Hire />
            <Portfolio portfolios={portfolios} />
            <Blog blogs={blogs} />
            <Contact />
          </main>

          <Footer socialLinks={socialLinks} />
        </div>
      </ThemeProvider>
    </>
  );
};

export const getStaticProps = async () => {
  const cmsUrl = process.env.NEXT_PUBLIC_API_URL;

  const about = (await axios.get(`${cmsUrl}/about`)).data;
  const profile = (await axios.get(`${cmsUrl}/profile`)).data;
  const services = (await axios.get(`${cmsUrl}/services`)).data;
  const blogs = (await axios.get(`${cmsUrl}/blogs?_sort=published_at:DESC`)).data;
  const portfolios = (await axios.get(`${cmsUrl}/portfolios`)).data;
  const socialLinks = (await axios.get(`${cmsUrl}/social`)).data;

  return {
    props: {
      about,
      profile,
      services,
      blogs,
      portfolios,
      socialLinks,
    },
  };
};

export default Home;
