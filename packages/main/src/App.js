import { lazily } from "react-lazily";
import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// All components imported here
import { GeneralErrorBoundary, GeneralLoading } from "./components";
import ManageMembers from "./components/manage-members/ManageMembers";
import ChangeWorkspaceName from "./components/change-workspace-name/ChangeWorkspaceName";

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
  DownloadsPage,
  PluginsPage,
  PricingPage,
  InvitePage,
  ResetPassword,
  ChangePassword,
  WhyZuriChat,
  PrivacyPage,
  ErrorPage
} from "./pages";
import TermsOfService from "../src-old/pages/termsOfService/index";
import { useAuth } from "./auth/use-auth";
import SettingsHome from "../src/pages/protected/settings-home/SettingsHome";
import AccountProfile from "./pages/protected/account-profile/AccountProfile";
import AcctDeactivation from "./pages/protected/account-profile/AccountProfile/account-deactivation";
import ManageWorkspace from "./pages/protected/manage-workspace/ManageWorkspace";
import AboutWorkSpace from "./pages/protected/about-workspace/AboutWorkSpace";
import Help from "./pages/static/help";
import TermsCondition from "./pages/static/legal";

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
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/downloads" component={DownloadsPage} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/legal" component={TermsCondition} />
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
          <ProtectedRoute exact path="/admin/settings/accountsProfile">
            <AccountProfile />
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/settings/accountsProfile/account-deactivation"
          >
            <AcctDeactivation />
          </ProtectedRoute>
          <ProtectedRoute exact path="/admin/settings/ManageWorkspace">
            <ManageWorkspace />
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/settings/ManageWorkspace/ChangeWorkspaceName"
          >
            <ChangeWorkspaceName />
          </ProtectedRoute>
          <ProtectedRoute exact path="/admin/settings/managemembers">
            <ManageMembers />
          </ProtectedRoute>
          <ProtectedRoute exact path="/admin/settings/aboutworkspace">
            <AboutWorkSpace />
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
          {/* <Route
            component={() => (
              <GeneralLoading text="404 - (Refactoring in Progress)" />
            )}
          /> */}
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Suspense>
    </GeneralErrorBoundary>
  </BrowserRouter>
);

export default App;
