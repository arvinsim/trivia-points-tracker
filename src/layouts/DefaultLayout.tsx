import React from "react";
import Grid from "@material-ui/core/Grid";

export const DefaultLayout = (props: any) => {
  return (
    <Grid container justify="center" alignItems="center" spacing={4}>
      {props.children}
    </Grid>
  );
};
