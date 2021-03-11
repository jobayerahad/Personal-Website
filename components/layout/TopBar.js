import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import styles from "../../styles/TopBar.module.scss";
import HideOnScroll from "../../utils/HideOnScroll";

const TopBar = (props) => {
  const {
    data: { short_name },
  } = props;

  const menuItems = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={styles.appbar}>
          <Toolbar>
            <Button startIcon={<GiHamburgerMenu />} color="inherit" onClick={openDrawer}>
              Menu
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <SwipeableDrawer anchor="top" open={open} onClose={closeDrawer} onOpen={openDrawer}>
        <div className={styles.drawer}>
          <div className={styles.drawerTop}>
            <ScrollLink to="Home" spy smooth duration={500} onClick={closeDrawer}>
              <Typography variant="h5" className={styles.name}>
                {short_name}
              </Typography>
            </ScrollLink>

            <IconButton color="inherit" aria-label="close menu" component="span" onClick={closeDrawer}>
              <AiOutlineCloseCircle />
            </IconButton>
          </div>

          <List>
            {menuItems.map((item, index) => (
              <ScrollLink
                to={item}
                spy
                smooth
                duration={500}
                key={index}
                activeClass={styles.active}
                onClick={closeDrawer}
              >
                <ListItem button>
                  <ListItemText primary={item} align="center" />
                </ListItem>
              </ScrollLink>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default TopBar;
