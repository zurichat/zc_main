import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// All components imported here
import { GeneralErrorBoundary, GeneralLoading } from "./components";

// All Pages imported here
import { HomePage, Login, SignUp, SignOut } from "./pages";

import { CreateWorkspace, ChooseWorkspace } from "./pages/Protected";

const App = () => (
  <BrowserRouter>
    <GeneralErrorBoundary>
      <Suspense fallback={<GeneralLoading />}>
        <Switch>
          {/* <GeneralLoading /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signout" component={SignOut} />

          <Route path="/choose-workspace" component={ChooseWorkspace} />
          <Route path="/create-workspace" component={CreateWorkspace} />

          {/* <Route path="/workspace/*" /> */}

          {/* <Route
            path="*"
            component={() => (
              <GeneralLoading text="404 - (Refactoring in Progress)" />
            )}
          /> */}
        </Switch>

        {/* <Route exact path="/" component={HomePage} /> */}
      </Suspense>
    </GeneralErrorBoundary>
  </BrowserRouter>
);

export default App;
