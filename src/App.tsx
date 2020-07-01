import React, { useState } from "react";

// core
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

// icons
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  points: {
    textAlign: "center",
    fontSize: "64px",
    padding: "20px 0",
  },
  button: {
    width: "100%",
    fontSize: "48px",
  },
  message: {
    textAlign: "center",
    fontSize: "24px",
  },
});

// import "./App.css";

function App() {
  const classes = useStyles();
  const [points, setPoints] = useState<number>(0);
  const [messages, setMessages] = useState<React.ReactNode[]>([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const addMessage = (message: React.ReactNode) => {
    setMessages([message, ...messages.slice(0, 4)]);
  };

  const increment = (points: number) => {
    const result = points + 1;
    setPoints(result);
    addMessage(`${points} was incremented to ${result}`);
  };
  const decrement = (points: number) => {
    let result = points - 1;
    if (result < 0) {
      return;
    }
    setPoints(result);
    addMessage(`${points} was decremented to ${result}`);
  };
  const handleMenuButtonClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };
  const resetPoints = () => {
    setPoints(0);
    addMessage("Points was reset to 0");
    closeMenu();
  };

  return (
    <div className="App">
      <CssBaseline>
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12}>
            <AppBar position="static">
              <Toolbar>
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
                  <MenuItem onClick={resetPoints}>Reset Points</MenuItem>
                </Menu>
                <Typography variant="h5">Trivia Points Tracker</Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.points}>
              {points} {points < 2 ? "pt" : "pts"}
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => increment(points)}
              startIcon={<ArrowUpwardIcon style={{ fontSize: "48px" }} />}
            >
              Up
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => decrement(points)}
              startIcon={<ArrowDownwardIcon style={{ fontSize: "48px" }} />}
            >
              Down
            </Button>
          </Grid>
          <Grid item xs={12}>
            {messages.map((message, index) => {
              return (
                <div key={index} className={classes.message}>
                  {message}
                </div>
              );
            })}
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
}

export default App;
