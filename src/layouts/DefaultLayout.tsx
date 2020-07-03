import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface Props {
  hamburgerMenu?: React.ReactNode;
  children?: React.ReactNode;
}

export const DefaultLayout = (props: Props) => {
  const { hamburgerMenu } = props;
  return (
    <Grid container justify="center" alignItems="center" spacing={4}>
      <AppBar position="static">
        <Toolbar>
          {/* TODO: Put the hamburger menu here */}
          {hamburgerMenu}
          <Typography variant="h5">Trivia Points Tracker</Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </Grid>
  );
};
