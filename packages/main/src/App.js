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
  NewSignOut,
  AboutPage,
  ContactUsPage,
  PluginsPage,
  PricingPage,
  InvitePage,
  ResetPassword,
  ChangePassword,
  WhyZuriChat,
  PrivacyPage
} from "./pages";

import TermsOfService from "../src-old/pages/termsOfService/index";
import SettingsHome from "../src-old/pages/admin/Settings/components/SettingsHome.js";
import Analytics from "../src-old/pages/admin/Analytics/index.js";
import Blogs from "../src-old/pages/Blogs/components/blogContent.jsx";
import DownloadApps from "../src-old/pages/download/index.js";
import AccountDeactivation from "../src-old/pages/settings/components/AcctDeactivation.js";
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
        auth.user ? (
          children
        ) : location.pathname === "/signout" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
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
          <Route exact path="/plugins" component={PluginsPage} />
          <Route exact path="/pricing" component={PricingPage} />
          <Route path="/invites/:id" component={InvitePage} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route path="/change-password" component={ChangePassword} />
          <Route path="/whyzurichat" component={WhyZuriChat} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/terms" component={TermsOfService} />

          <ProtectFromAuthRoute exact path="/login">
            <Login />
          </ProtectFromAuthRoute>
          <ProtectFromAuthRoute exact path="/signup">
            <SignUp />
          </ProtectFromAuthRoute>
          <ProtectedRoute exact path="/signout">
            <NewSignOut />
          </ProtectedRoute>
          <ProtectedRoute exact path="/admin/settings">
            <SettingsHome />
          </ProtectedRoute>
          <ProtectedRoute exact path="/ZurichatBlog">
            <Blogs />
          </ProtectedRoute>
          <ProtectedRoute exact path="/admin/stats">
            <Analytics />
          </ProtectedRoute>
          <ProtectedRoute exact path="/download-apps">
            <DownloadApps />
          </ProtectedRoute>
          <ProtectedRoute exact path="/confirm-deactivation">
            <AccountDeactivation />
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
