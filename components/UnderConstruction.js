import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Grid, Typography } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";

import { firebase, analytics } from "../config/firebase";
import Meta from "../components/layout/Meta";
import styles from "../styles/NotFound.module.scss";

const Home = ({ socialLinks }) => {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const logEvent = (url) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent("screen_view");
      };

      routers.events.on("routeChangeComplete", logEvent);
      //For First Page
      logEvent(window.location.pathname);

      //Remvove Event Listener after un-mount
      return () => {
        routers.events.off("routeChangeComplete", logEvent);
      };
    }
  }, []);

  return (
    <>
      <Meta />

      <Container className={styles.container} maxWidth="xs">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Image src="/under_construction.svg" alt="Under Construction Image" width={396} height={243} />
          </Grid>

          <Grid item xs={12} className={styles.textContainer}>
            <Typography variant="h2" component="p" align="center" paragraph>
              Coming Soon!
            </Typography>

            <Typography variant="h5" component="p" align="center" paragraph>
              Currently I'm working on my site.
            </Typography>
          </Grid>

          <Grid item xs={12} container justify="center">
            <Typography color="textSecondary">Find me on : </Typography>

            {socialLinks &&
              Object.values(socialLinks).map((url, index) => (
                <SocialIcon
                  style={{ height: 25, width: 25, marginLeft: "0.5rem" }}
                  fgColor="#fafafa"
                  url={url}
                  key={index}
                  target="_blank"
                />
              ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const db = firebase.database();

  // Fetch "social links" from db
  const socialLinks = (await db.ref("settings/socialLinks").once("value")).val();

  return {
    props: {
      socialLinks,
    },
  };
};

export default Home;
