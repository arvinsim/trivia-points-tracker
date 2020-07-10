import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Route } from "react-router-dom";

import { resetPoints, selectUser } from "../redux";
import Button from "@material-ui/core/Button";
import { signInWithGoogle, signOut } from "../firebase";

interface Props {
  children?: React.ReactNode;
}

export const DefaultLayout = (props: Props) => {
  return (
    <Grid container justify="center" alignItems="center" spacing={4}>
      <AppBar position="static">
        <Toolbar>
          <Route exact path="/points-tracker">
            <PointsTrackerHamburgerMenu />
          </Route>
          <Typography variant="h5">Trivia Points Tracker</Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </Grid>
  );
};

const PointsTrackerHamburgerMenu = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuButtonClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };
  const reset = () => {
    dispatch(resetPoints());
  };
  const save = () => {};

  return (
    <React.Fragment>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuButtonClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={reset}>Reset</MenuItem>
        <MenuItem onClick={save}>Save</MenuItem>
        <LogoutMenuItem />
      </Menu>
    </React.Fragment>
  );
};

const LogoutMenuItem = () => {
  const user = useSelector(selectUser);
  const onClick = () => {
    signOut();
  };
  if (user) {
    return <MenuItem onClick={onClick}>Log out</MenuItem>;
  }

  return null;
};
