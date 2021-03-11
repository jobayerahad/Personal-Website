import Image from "next/image";
import { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "../../styles/Portfolio.module.scss";
import Detail from "./Detail";

const Summary = ({ portfolio }) => {
  const [open, setOpen] = useState(false);
  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);

  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <div className={styles.itemContainer}>
          <Image
            alt={portfolio.title}
            src={portfolio.thumbnail.formats.small.url}
            className={styles.img}
            width="100%"
            height={75}
            layout="responsive"
            objectFit="cover"
            quality={100}
          />

          <div className={styles.itemInfo} onClick={openHandler}>
            <Typography variant="h5" className={styles.itemTitle} gutterBottom>
              {portfolio.title}
            </Typography>

            <Typography className={styles.itemSubTitle}>{portfolio.group.title}</Typography>
          </div>
        </div>
      </Grid>

      <Detail open={open} closeHandler={closeHandler} portfolio={portfolio} />
    </>
  );
};

Summary.propTypes = {
  portfolio: PropTypes.object.isRequired,
};

export default Summary;
