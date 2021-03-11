import Link from "next/link";
import Image from "next/image";
import Truncate from "react-truncate";
import Moment from "react-moment";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";

import styles from "../../styles/Blog.module.scss";

const Summary = ({ blog: { body, category, thumbnail, title, excerpt, id, published_at } }) => (
  <Grid item xs={12} md={6} lg={4}>
    <Card className={styles.card}>
      <div className={styles.dateContainer}>
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

        <div className={styles.date}>
          <Moment date={published_at} format="Do MMMM, YYYY" />
        </div>
      </div>

      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          <Link href={`/blog/${id}`}>{title}</Link>
        </Typography>

        {excerpt ? (
          <Typography variant="body2">{excerpt}</Typography>
        ) : (
          <Truncate lines={4}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Truncate>
        )}

        <div className={styles.tags}>
          Category:
          <Typography color="textSecondary" style={{ paddingLeft: 5 }}>
            <Link href={`/blog/?category=${category.id}`}>{category.title}</Link>
          </Typography>
        </div>
      </CardContent>
    </Card>
  </Grid>
);

export default Summary;
