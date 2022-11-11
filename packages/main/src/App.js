import { lazily } from "react-lazily";
import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// All components imported here
import { GeneralErrorBoundary, GeneralLoading } from "./components";

// All utilities imported here
import { withSuspense } from "./utils";

// All Pages imported here
import {
  HomePage,
  Login,
  SignUp,
  SignOut,
  AboutPage,
  ContactUsPage,
  DownloadsPage,
  PluginsPage,
  PricingPage,
  InvitePage,
  ResetPassword,
  ChangePassword
} from "./pages";
import { useAuth } from "./auth/use-auth";

const { Workspace, CreateWorkspace, ChooseWorkspace } = lazily(() =>
  import("./pages/protected")
);

const ProtectedRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user !== true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signout",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
const ProtectFromAuthRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          <Redirect
            to={{
              pathname: "/choose-workspace",
              state: { from: location }
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

const App = () => (
  <BrowserRouter>
    <GeneralErrorBoundary>
      <Suspense fallback={<GeneralLoading />}>
        <Switch>
          {/* <GeneralLoading /> */}
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/signout" component={SignOut} /> */}
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact-us" component={ContactUsPage} />
          <Route exact path="/downloads" component={DownloadsPage} />
          <Route exact path="/plugins" component={PluginsPage} />
          <Route exact path="/pricing" component={PricingPage} />
          <Route path="/invites/:id" component={InvitePage} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route path="/change-password" component={ChangePassword} />

          <ProtectFromAuthRoute exact path="/login">
            <Login />
          </ProtectFromAuthRoute>
          <ProtectFromAuthRoute exact path="/signup">
            <SignUp />
          </ProtectFromAuthRoute>
          <ProtectedRoute exact path="/signout">
            <SignOut />
          </ProtectedRoute>
          <ProtectedRoute exact path="/choose-workspace">
            {withSuspense(ChooseWorkspace)}
          </ProtectedRoute>
          <ProtectedRoute path="/create-workspace">
            {withSuspense(CreateWorkspace)}
          </ProtectedRoute>
          <ProtectedRoute path="/workspace/:workspaceId">
            {withSuspense(Workspace)}
          </ProtectedRoute>
          <Route
            component={() => (
              <GeneralLoading text="404 - (Refactoring in Progress)" />
            )}
          />
        </Switch>
      </Suspense>
    </GeneralErrorBoundary>
  </BrowserRouter>
);

export default App;
