import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { red, green, yellow } from "@material-ui/core/colors";
import {
  Avatar,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Hidden,
} from "@material-ui/core";
import RemoveCircleOutlinedIcon from "@material-ui/icons/RemoveCircleOutlined";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import CheckIcon from "@material-ui/icons/Check";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: (drawerWidth) => drawerWidth,
    borderRight: 0,
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  grid: {
    height: "100%",
    background: "#111",
  },
  active: {
    color: red[600],
    transition: "0.2s",
  },
}));

const Sidebar = ({ drawerWidth, data: { avatar, shortName, availability } }) => {
  const classes = useStyles(drawerWidth);

  const menuItems = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

  return (
    <Hidden smDown implementation="css">
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <Box mb={4}>
            <Grid container direction="column" justify="center" alignItems="center">
              <Box mb={1.5} border={4} borderColor="grey.400" borderRadius="50%">
                <Avatar alt={shortName} src={avatar} className={classes.large} />
              </Box>
              <Box mb={1} color="grey.100">
                <Typography variant="caption" align="center">
                  {shortName}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" color="grey.500">
                {availability === "active" && (
                  <>
                    <CheckIcon fontSize="small" style={{ marginRight: "2px", color: green[600] }} />
                    <Typography variant="subtitle2" align="center">
                      Available for Work
                    </Typography>
                  </>
                )}
                {availability === "busy" && (
                  <>
                    <Brightness3Icon
                      fontSize="small"
                      style={{ marginRight: "2px", color: yellow[600] }}
                    />
                    <Typography variant="subtitle2" align="center">
                      Developing new skills
                    </Typography>
                  </>
                )}
                {availability === "not-available" && (
                  <>
                    <RemoveCircleOutlinedIcon
                      fontSize="small"
                      style={{ marginRight: "2px", color: red[600] }}
                    />
                    <Typography variant="subtitle2" align="center">
                      Not Available
                    </Typography>
                  </>
                )}
              </Box>
            </Grid>
          </Box>

          <Box color="grey.300">
            <List>
              {menuItems.map((item, index) => (
                <ScrollLink
                  to={item}
                  spy
                  smooth
                  duration={500}
                  key={index}
                  activeClass={classes.active}
                >
                  <ListItem button>
                    <ListItemText primary={item} align="center" />
                  </ListItem>
                </ScrollLink>
              ))}
            </List>
          </Box>
        </Grid>
      </Drawer>
    </Hidden>
  );
};

const mapStateToProps = (state) => ({
  data: state.profile.sidebar,
});

Sidebar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Sidebar);
