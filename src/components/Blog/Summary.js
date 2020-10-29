import React from "react";
import Truncate from "react-truncate";
import { Grid, Box, Typography, Card, CardMedia, CardContent, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    boxShadow: "none",
    backgroundColor: "inherit",
  },
  cardContent: {
    padding: "1rem 0",
  },
});

const Summary = ({ blog: { body, categories, thumbnail, title, excerpt, href } }) => {
  const classes = useStyles();

  return (
    <Grid item md={4}>
      <Card className={classes.card}>
        <CardMedia component="img" alt={title} image={thumbnail} title={title} />

        <CardContent className={classes.cardContent}>
          <Link href={`http://blog.jobayerahad.com/${href}`} target="_blank" color="inherit">
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </Link>

          {excerpt ? (
            <Typography variant="body2" paragraph>
              {excerpt}
            </Typography>
          ) : (
            <Truncate lines={4}>
              <Typography
                variant="body2"
                component="p"
                dangerouslySetInnerHTML={{ __html: body }}
              ></Typography>
            </Truncate>
          )}

          <Box mt={1} display="flex" alignItems="center">
            Categories:
            {categories.map((category, index) => (
              <Link
                href={`http://blog.jobayerahad.com/search?category=${category}`}
                target="_blank"
                underline="none"
                className={classes.link}
                key={index}
              >
                <Typography color="secondary" style={{ paddingLeft: 5 }}>
                  {category}
                </Typography>
              </Link>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Summary;
