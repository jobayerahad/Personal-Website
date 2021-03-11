import { Link as ScrollLink } from "react-scroll";
import { green, yellow, grey } from "@material-ui/core/colors";
import { Avatar, Drawer, Grid, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { FcCheckmark } from "react-icons/fc";
import { FaMoon } from "react-icons/fa";
import PropTypes from "prop-types";

import styles from "../../styles/Sidebar.module.scss";

const Sidebar = ({ data: { avatar, short_name, availability } }) => {
  const menuItems = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: styles.drawerPaper,
      }}
      anchor="left"
    >
      <Grid container direction="column" justify="center" alignItems="center" className={styles.grid}>
        <div style={{ marginBottom: "2rem" }}>
          <Grid container direction="column" justify="center" alignItems="center">
            <div className={styles.avatarContainer}>
              <Avatar alt={short_name} src={avatar && avatar.formats.thumbnail.url} className={styles.avatar} />
            </div>

            <div className={styles.shortName}>
              <Typography variant="caption" align="center">
                {short_name}
              </Typography>
            </div>

            <div className={styles.availability}>
              {availability === "Available" && (
                <>
                  <FcCheckmark fontSize="small" style={{ marginRight: "2px", color: green[600] }} />
                  <Typography variant="subtitle2" align="center">
                    Available for Work
                  </Typography>
                </>
              )}

              {availability === "Busy" && (
                <>
                  <FaMoon fontSize="small" style={{ marginRight: "2px", color: yellow[600] }} />
                  <Typography variant="subtitle2" align="center">
                    Developing new skills
                  </Typography>
                </>
              )}
            </div>
          </Grid>
        </div>

        <div>
          <List style={{ color: grey[300] }}>
            {menuItems.map((item, index) => (
              <ScrollLink to={item} spy smooth duration={500} key={index} activeClass={styles.active}>
                <ListItem button>
                  <ListItemText primary={item} align="center" />
                </ListItem>
              </ScrollLink>
            ))}
          </List>
        </div>
      </Grid>
    </Drawer>
  );
};

Sidebar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sidebar;
