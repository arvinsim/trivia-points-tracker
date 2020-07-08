import React from "react";

import { DefaultLayout } from "../layouts/DefaultLayout";
import Button from "@material-ui/core/Button";
import { signInWithGoogle } from "../firebase";

export const Home = () => {
  return (
    <DefaultLayout>
      <Button variant="contained" color="primary" onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </DefaultLayout>
  );
};
