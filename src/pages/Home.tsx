import React from "react";
import { Link } from "react-router-dom";

import { DefaultLayout } from "../layouts/DefaultLayout";

export const Home = () => {
  return (
    <DefaultLayout>
      <div>Home Page</div>
      <Link to={"/sign-in"}>Sign In</Link>
    </DefaultLayout>
  );
};
