import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
  },
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
  const [points, setPoints] = useState<number>(0);
  const [messages, setMessages] = useState<string[]>([]);
  const classes = useStyles();

  const increment = (points: number) => {
    const result = points + 1;
    setPoints(result);
    setMessages([
      `${points} was incremented to ${result}`,
      ...messages.slice(0, 4),
    ]);
  };
  const decrement = (points: number) => {
    let result = points - 1;
    if (result < 0) {
      return;
    }
    setPoints(result);
    setMessages([
      `${points} was decremented to ${result}`,
      ...messages.slice(0, 4),
    ]);
  };

  return (
    <div className="App">
      <CssBaseline>
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12}>
            <h1 className={classes.header}>Trivia Points Tracker</h1>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.points}>{points} pts</Paper>
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
