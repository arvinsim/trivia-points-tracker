import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { PointsTracker } from "./pages/PointsTracker";
import { SignIn } from "./pages/SignIn";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

console.log(firebaseConfig);

function App() {
  useEffect(() => {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  });

  return (
    <div className="App">
      <CssBaseline>
        <Router>
          <Switch>
            <Route path="/points-tracker">
              <PointsTracker />
            </Route>
            <Route>
              <SignIn />
            </Route>
          </Switch>
        </Router>
      </CssBaseline>
    </div>
  );
}

export default App;
