import Moment from "react-moment";
import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  Link,
  Slide,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";

import PopUpTitle from "../../utils/PopUpTitle";

const Detail = ({
  portfolio: { title, brief, photo, group, skills, client, live_url, github_url, completed_at },
  open,
  closeHandler,
}) => {
  const skillsArr = skills.map((skill) => skill.title);

  return (
    <Dialog
      open={open}
      onClose={closeHandler}
      aria-labelledby="portfolio-detail"
      maxWidth="md"
      scroll="body"
      TransitionComponent={Slide}
    >
      <PopUpTitle id="portfolio-title" onClose={closeHandler}>
        {title}
      </PopUpTitle>

      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Carousel showThumbs={false} showStatus={false}>
              {photo.map((item, index) => (
                <div key={index}>
                  <img src={item.formats.medium.url} alt={item.formats.medium.name} className="slider__img" />
                </div>
              ))}
            </Carousel>
          </Grid>

          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="h5" paragraph>
                About The Portfolio
              </Typography>
              <Typography>{brief}</Typography>
            </Box>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell component="td">{group.title}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Skills</TableCell>
                  <TableCell component="td">{skillsArr.join(", ")}</TableCell>
                </TableRow>

                {client && (
                  <TableRow>
                    <TableCell>Client</TableCell>
                    <TableCell component="td">{client}</TableCell>
                  </TableRow>
                )}

                <TableRow>
                  <TableCell>Completed At</TableCell>
                  <TableCell component="td">
                    <Moment date={completed_at} format="Do MMMM, YYYY" />
                  </TableCell>
                </TableRow>

                {live_url && (
                  <TableRow>
                    <TableCell>Live URL </TableCell>
                    <TableCell component="td">
                      <Link href={live_url} target="_blank" color="inherit">
                        {live_url}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}

                {github_url && (
                  <TableRow>
                    <TableCell>Github URL </TableCell>
                    <TableCell component="td">
                      <Link href={github_url} target="_blank" color="inherit">
                        {github_url}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}
              </TableHead>
            </Table>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

Detail.propTypes = {
  portfolio: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default Detail;
