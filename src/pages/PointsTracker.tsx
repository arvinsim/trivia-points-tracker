import React from "react";
import { useSelector, useDispatch } from "react-redux";

// core
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

// icons
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import { DefaultLayout } from "../layouts/DefaultLayout";
import { incrementPoints, decrementPoints, selectPoints } from "../redux";

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

export function PointsTracker() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const points = useSelector(selectPoints);

  const increment = () => {
    dispatch(incrementPoints());
  };
  const decrement = () => {
    dispatch(decrementPoints());
  };

  return (
    <DefaultLayout>
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
          onClick={() => increment()}
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
          onClick={() => decrement()}
          startIcon={<ArrowDownwardIcon style={{ fontSize: "48px" }} />}
        >
          Down
        </Button>
      </Grid>
    </DefaultLayout>
  );
}