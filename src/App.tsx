import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { PointsTracker } from "./pages/PointsTracker";

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <PointsTracker />
      </CssBaseline>
    </div>
  );
}

export default App;
