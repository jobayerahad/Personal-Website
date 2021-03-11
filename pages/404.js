import Link from "next/link";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { ImHome } from "react-icons/im";

import Meta from "../components/layout/Meta";
import styles from "../styles/NotFound.module.scss";

const NotFound = () => (
  <>
    <Meta title="404 - Jobayer Ahad" />

    <Container className={styles.container} maxWidth="md">
      <Grid container spacing={5}>
        <Grid item md={6}>
          <img src="/not-found.svg" alt="404 Image" className={styles.img} />
        </Grid>

        <Grid item md={6} className={styles.textContainer}>
          <Typography variant="h2" component="p" paragraph>
            Oops,
          </Typography>

          <Typography variant="h5" component="p" paragraph>
            The page you're looking for was NOT FOUND!
          </Typography>

          <Link href="/">
            <Button variant="contained" color="primary" startIcon={<ImHome />}>
              Back to Homepage
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default NotFound;
