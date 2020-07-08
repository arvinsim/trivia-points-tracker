import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";

import { store } from "./redux";

import { PointsTracker } from "./pages/PointsTracker";
import { Home } from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CssBaseline>
          <Router>
            <Switch>
              <Route exact path="/points-tracker">
                <PointsTracker />
              </Route>
              <Route>
                <Home />
              </Route>
            </Switch>
          </Router>
        </CssBaseline>
      </div>
    </Provider>
  );
}

export default App;
