import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { GeneralErrorBoundary, GeneralLoading } from "../src/components";

// Priority imports
import Login from "../ignore/pages/login";
import SignUp from "../ignore/pages/signup";
import LandingPage from "../ignore/pages/LandingPage";
import RedirectRoute from "../ignore/pages/redirect";
import PrivateRoute from "../ignore/pages/settings/Utils/PrivateRoute";

// Loadables
const SignOut = React.lazy(() => import("../ignore/pages/signout/index"));
const Workspace = React.lazy(() =>
  import("../ignore/pages/workspace/components/Workspace")
);
// password block
const ResetPassword = React.lazy(() =>
  import("../ignore/pages/passwordReset/index")
);
const NewPassword = React.lazy(() =>
  import("../ignore/pages/passwordReset/newPassword")
);
// end password block

const CookiesSetting = React.lazy(() =>
  import("../ignore/pages/cookiesSettings")
);
const Cookies = React.lazy(() => import("../ignore/pages/cookies"));
const Features = React.lazy(() => import("../ignore/pages/features"));
const Resources = React.lazy(() => import("../ignore/pages/resources"));
const Help = React.lazy(() => import("../ignore/pages/Help"));
const Pricing = React.lazy(() => import("../ignore/pages/pricing"));
const Security = React.lazy(() => import("../ignore/pages/security"));
const Invite = React.lazy(() => import("../ignore/pages/inviteScreen"));
const Inviterequest = React.lazy(() =>
  import("../ignore/pages/InviteRequest/InviteRequest")
);
const SendRequest = React.lazy(() =>
  import("../ignore/pages/InviteRequest/SendRequest")
);
const DAO_Features = React.lazy(() => import("../ignore/pages/DAO-Features"));
const ContactUs = React.lazy(() => import("../ignore/pages/contact-us"));
const Search = React.lazy(() => import("../ignore/pages/search"));
const AppsAndIntegrations = React.lazy(() =>
  import("../ignore/pages/apps-integration")
);
const Download = React.lazy(() => import("../ignore/pages/download"));
const DownloadsMac = React.lazy(() =>
  import("../ignore/pages/download/DownloadsMac")
);
const Careers = React.lazy(() => import("../ignore/pages/careers"));
const MarketPlace = React.lazy(() =>
  import("../ignore/pages/marketplace/marketplace")
);
const Settings = React.lazy(() => import("../ignore/pages/settings"));
const ConfirmPassword = React.lazy(() =>
  import("../ignore/pages/settings/components/ConfirmPassword")
);
const AccDeactivated = React.lazy(() =>
  import("../ignore/pages/settings/components/AccDeactivated")
);
const DeactivateAccount = React.lazy(() =>
  import("../ignore/pages/settings/components/AcctDeactivation")
);
const AllSessionSignOut = React.lazy(() =>
  import("../ignore/pages/settings/components/AllSessionSignOut")
);
const ConfirmDeactivation = React.lazy(() =>
  import("../ignore/pages/settings/components/ConfirmDeactivation")
);
const CreateWorkSpaces = React.lazy(() =>
  import("../ignore/pages/createworkspace/components/WorkSpaceContext")
);
const PrivacyPolicy = React.lazy(() =>
  import("../ignore/pages/privacy-policy/index")
);
const NotFoundPage = React.lazy(() => import("../ignore/pages/404"));
const Billing = React.lazy(() => import("../ignore/pages/admin/Billing"));
const Customize = React.lazy(() => import("../ignore/pages/admin/Customize"));
const Deprecation = React.lazy(() =>
  import("../ignore/pages/admin/Deprecation")
);
const UserGroups = React.lazy(() => import("../ignore/pages/admin/UserGroups"));
const Blog = React.lazy(() => import("../ignore/pages/blogs"));
const Homepage = React.lazy(() => import("../ignore/pages/home"));
// import Permissions from "./pages/admin/Permissions"
const SettingsHome = React.lazy(() =>
  import("../ignore/pages/admin/Settings/index")
);
const About = React.lazy(() => import("../ignore/pages/about/index"));
const AdminSettingsTab = React.lazy(() =>
  import("../ignore/pages/admin/Settings/components/AdminSettingsTab")
);
const TermsOfService = React.lazy(() =>
  import("../ignore/pages/termsOfService")
);
const AnayticsHome = React.lazy(() =>
  import("../ignore/pages/admin/Analytics/index")
);
const Plugins = React.lazy(() => import("../ignore/pages/plugins"));
const Home = React.lazy(() =>
  import("../ignore/pages/admin/Settings/components/SettingsHome")
);
const AboutWorkSpace = React.lazy(() =>
  import("../ignore/pages/admin/AboutWorkSpace")
);
const adminNalytics = React.lazy(() =>
  import("../ignore/pages/admin/Settings/Member")
);
const AccountProfile = React.lazy(() =>
  import("../ignore/pages/admin/AccountProfile")
);
const Legal = React.lazy(() => import("../ignore/pages/legal"));
const ZurichatBlog = React.lazy(() =>
  import("../ignore/pages/blogs/components/zurichatBlog")
);

const ManageMembers = React.lazy(() =>
  import("../ignore/pages/admin/manage_members/components/ManageMembers")
);
const Ebooks = React.lazy(() => import("../ignore/pages/ebooks"));
const Invitation = React.lazy(() => import("../ignore/pages/admin/Invitation"));
const Whyzurichat = React.lazy(() =>
  import("../ignore/pages/WhyZuriChat/Whyzurichat")
);
const Gateways = React.lazy(() =>
  import("../ignore/pages/admin/gateways/components/gateways")
);
const OnboardingHelp = React.lazy(() =>
  import("../ignore/pages/LoginSignUpHelp/index")
);
const DeleteWorkspace = React.lazy(() =>
  import("../ignore/pages/settings/components/deleteWorkspace")
);
const BookDemo = React.lazy(() => import("../ignore/pages/book-a-demo"));

const ChangeWorkspaceName = React.lazy(() =>
  import("../ignore/pages/admin/Settings/components/ChangeWorkspaceName")
);
const BlogDetails = React.lazy(() =>
  import("../ignore/pages/blogs/components/BlogDetails")
);
const CreateBlog = React.lazy(() =>
  import("../ignore/pages/blogs/components/CreateBlog.jsx")
);

const App = () => {
  // Suspended components should be grouped to alleviate staggered loading
  return (
    <BrowserRouter>
      <GeneralErrorBoundary>
        <Switch>
          <Route path="/about">
            <React.Suspense fallback={<GeneralLoading />}>
              <About />
            </React.Suspense>
          </Route>
          <Route path="/help">
            <React.Suspense fallback={<GeneralLoading />}>
              <Help />
            </React.Suspense>
          </Route>
          <Route path="/features">
            <React.Suspense fallback={<GeneralLoading />}>
              <Features />
            </React.Suspense>
          </Route>
          <Route path="/invites/:id">
            <React.Suspense fallback={<GeneralLoading />}>
              <Invite />
            </React.Suspense>
          </Route>
          <Route path="/invite-request">
            <React.Suspense fallback={<GeneralLoading />}>
              <Inviterequest />
            </React.Suspense>
          </Route>
          <Route path="/send-request">
            <React.Suspense fallback={<GeneralLoading />}>
              <SendRequest />
            </React.Suspense>
          </Route>
          <Route path="/resources">
            <React.Suspense fallback={<GeneralLoading />}>
              <Resources />
            </React.Suspense>
          </Route>
          <Route path="/search">
            <React.Suspense fallback={<GeneralLoading />}>
              <Search />
            </React.Suspense>
          </Route>
          <Route path="/createBlog">
            <React.Suspense fallback={<GeneralLoading />}>
              <CreateBlog />
            </React.Suspense>
          </Route>
          <Route path="/blog/:title">
            <React.Suspense fallback={<GeneralLoading />}>
              <BlogDetails />
            </React.Suspense>
          </Route>
          <Route path="/blog">
            <React.Suspense fallback={<GeneralLoading />}>
              <Blog />
            </React.Suspense>
          </Route>
          <Route path="/pricing">
            <React.Suspense fallback={<GeneralLoading />}>
              <Pricing />
            </React.Suspense>
          </Route>
          <Route path="/plugins">
            <React.Suspense fallback={<GeneralLoading />}>
              <Plugins />
            </React.Suspense>
          </Route>
          <Route path="/security">
            <React.Suspense fallback={<GeneralLoading />}>
              <Security />
            </React.Suspense>
          </Route>
          <Route path="/downloads">
            <React.Suspense fallback={<GeneralLoading />}>
              <Download />
            </React.Suspense>
          </Route>
          <Route path="/ebooks">
            <React.Suspense fallback={<GeneralLoading />}>
              <Ebooks />
            </React.Suspense>
          </Route>
          <Route path="/downloadsMac">
            <React.Suspense fallback={<GeneralLoading />}>
              <DownloadsMac />
            </React.Suspense>
          </Route>
          <Route path="/contact-us">
            <React.Suspense fallback={<GeneralLoading />}>
              <ContactUs />
            </React.Suspense>
          </Route>
          <Route path="/careers">
            <React.Suspense fallback={<GeneralLoading />}>
              <Careers />
            </React.Suspense>
          </Route>
          <Route path="/terms">
            <React.Suspense fallback={<GeneralLoading />}>
              <TermsOfService />
            </React.Suspense>
          </Route>
          <Route path="/legal">
            <React.Suspense fallback={<GeneralLoading />}>
              <Legal />
            </React.Suspense>
          </Route>
          <Route path="/privacy">
            <React.Suspense fallback={<GeneralLoading />}>
              <PrivacyPolicy />
            </React.Suspense>
          </Route>
          <Route path="/open-marketplace" exact>
            <React.Suspense fallback={<GeneralLoading />}>
              <MarketPlace />
            </React.Suspense>
          </Route>
          <Route path="/dao-features">
            <React.Suspense fallback={<GeneralLoading />}>
              <DAO_Features />
            </React.Suspense>
          </Route>
          <Route path="/troubleshooting/onboarding-help">
            <React.Suspense fallback={<GeneralLoading />}>
              <OnboardingHelp />
            </React.Suspense>
          </Route>
          <Route path="/apps-integrations">
            <React.Suspense fallback={<GeneralLoading />}>
              <AppsAndIntegrations />
            </React.Suspense>
          </Route>
          <Route path="/ZurichatBlog">
            <React.Suspense fallback={<GeneralLoading />}>
              <ZurichatBlog />
            </React.Suspense>
          </Route>
          <Route path="/whyzurichat">
            <React.Suspense fallback={<GeneralLoading />}>
              <Whyzurichat />
            </React.Suspense>
          </Route>

          {/* ----------------settings routes opened------------------------ */}

          <PrivateRoute
            component={ConfirmDeactivation}
            path="/confirm-deactivation"
          />
          <Route path="/account-deactivated">
            <AccDeactivated />
          </Route>
          <PrivateRoute
            path="/deactivate-account"
            component={DeactivateAccount}
          />

          <PrivateRoute path="/session-signout" component={AllSessionSignOut} />
          <PrivateRoute path="/settings" exact component={Settings} />
          <PrivateRoute path="/admin/settings" exact component={SettingsHome} />
          <PrivateRoute path="/admin/settings/home" exact component={Home} />

          <PrivateRoute
            path="/admin/name"
            exact
            component={ChangeWorkspaceName}
          />
          <PrivateRoute
            path="/admin/delete"
            exact
            component={DeleteWorkspace}
          />
          <PrivateRoute path="/homepage/profile" exact component={Homepage} />
          <PrivateRoute
            path="/components/gateways"
            exact
            component={Gateways}
          />
          <PrivateRoute
            path="/admin/name"
            exact
            component={ChangeWorkspaceName}
          />
          <PrivateRoute
            path="/admin/settings/analytics/memmber"
            exact
            component={adminNalytics}
          />

          <PrivateRoute
            path="/admin/settings/billings"
            exact
            component={Billing}
          />
          <PrivateRoute path="/admin/stats" exact component={AnayticsHome} />
          <PrivateRoute
            path="/admin/settings/usergroups"
            exact
            component={UserGroups}
          />
          <PrivateRoute
            path="/admin/settings/customize"
            exact
            component={Customize}
          />
          <PrivateRoute
            path="/admin/settings/aboutworkspace"
            exact
            component={AboutWorkSpace}
          />
          <PrivateRoute
            path="/admin/settings/accountsProfile"
            exact
            component={AccountProfile}
          />
          <Route
            path="/admin/settings/managemembers"
            exact
            component={ManageMembers}
          />

          <PrivateRoute path="/settings/:id" component={ConfirmPassword} />
          {/* ----------------settings routes closed----------------- */}
          <Route path="/admin/invites">
            <React.Suspense fallback={<GeneralLoading />}>
              <Invitation />
            </React.Suspense>
          </Route>
          <Route path="/reset-password">
            <React.Suspense fallback={<GeneralLoading />}>
              <ResetPassword />
            </React.Suspense>
          </Route>
          <Route path="/change-password">
            <React.Suspense fallback={<GeneralLoading />}>
              <NewPassword />
            </React.Suspense>
          </Route>
          <Route path="/cookies-settings">
            <React.Suspense fallback={<GeneralLoading />}>
              <CookiesSetting />
            </React.Suspense>
          </Route>
          <Route path="/cookies-banner">
            <React.Suspense fallback={<GeneralLoading />}>
              <Cookies />
            </React.Suspense>
          </Route>
          <Route path="/book-a-demo">
            <React.Suspense fallback={<GeneralLoading />}>
              <BookDemo />
            </React.Suspense>
          </Route>

          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </GeneralErrorBoundary>
    </BrowserRouter>
  );
};
export default App;
