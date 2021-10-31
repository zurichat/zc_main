import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// Priority imports
import Login from "./pages/login"
import SignUp from "./pages/signup"
import LandingPage from "./pages/LandingPage"
import GeneralLoading from "./components/GeneralLoading"
import GeneralErrorBoundary from "./components/GeneralErrorBoundary"
import RedirectRoute from "./pages/redirect"
import PrivateRoute from "./pages/settings/Utils/PrivateRoute"

// Loadables
const SignOut = lazy(() => import("./pages/signout/index"))
const Workspace = lazy(() => import("./pages/workspace/components/Workspace"))
// password block
const ResetPassword = lazy(() => import("./pages/passwordReset/index"))
const NewPassword = lazy(() => import("./pages/passwordReset/newPassword"))
// end password block

const CookiesSetting = lazy(() => import("./pages/cookiesSettings"))
const Cookies = lazy(() => import("./pages/cookies"))
const Features = lazy(() => import("./pages/features"))
const Resources = lazy(() => import("./pages/resources"))
const Help = lazy(() => import("./pages/Help"))
const Pricing = lazy(() => import("./pages/pricing"))
const Security = lazy(() => import("./pages/security"))
const Invite = lazy(() => import("./pages/inviteScreen"))
const Inviterequest = lazy(() => import("./pages/InviteRequest/InviteRequest"))
const SendRequest = lazy(() => import("./pages/InviteRequest/SendRequest"))
const DAO_Features = lazy(() => import("./pages/DAO-Features"))
const ContactUs = lazy(() => import("./pages/contact-us"))
const Search = lazy(() => import("./pages/search"))
const AppsAndIntegrations = lazy(() => import("./pages/apps-integration"))
const Download = lazy(() => import("./pages/download"))
const DownloadsMac = lazy(() => import("./pages/download/DownloadsMac"))
const Careers = lazy(() => import("./pages/careers"))
const MarketPlace = lazy(() => import("./pages/marketplace/marketplace"))
const Settings = lazy(() => import("./pages/settings"))
const ConfirmPassword = lazy(() =>
  import("./pages/settings/components/ConfirmPassword")
)
const AccDeactivated = lazy(() =>
  import("./pages/settings/components/AccDeactivated")
)
const DeactivateAccount = lazy(() =>
  import("./pages/settings/components/AcctDeactivation")
)
const AllSessionSignOut = lazy(() =>
  import("./pages/settings/components/AllSessionSignOut")
)
const ConfirmDeactivation = lazy(() =>
  import("./pages/settings/components/ConfirmDeactivation")
)
const CreateWorkSpaces = lazy(() =>
  import("./pages/createworkspace/components/WorkSpaceContext")
)
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy/index"))
const NotFoundPage = lazy(() => import("./pages/404"))
const Billing = lazy(() => import("./pages/admin/Billing"))
const Customize = lazy(() => import("./pages/admin/Customize"))
const Deprecation = lazy(() => import("./pages/admin/Deprecation"))
const UserGroups = lazy(() => import("./pages/admin/UserGroups"))
const Blog = lazy(() => import("./pages/blogs"))
const Homepage = lazy(() => import("./pages/home"))
// import Permissions from "./pages/admin/Permissions"
const SettingsHome = lazy(() => import("./pages/admin/Settings/index"))
const About = lazy(() => import("./pages/about/index"))
const AdminSettingsTab = lazy(() =>
  import("./pages/admin/Settings/components/AdminSettingsTab")
)
const TermsOfService = lazy(() => import("./pages/termsOfService"))
const AnayticsHome = lazy(() => import("./pages/admin/Analytics/index"))
const Plugins = lazy(() => import("./pages/plugins"))
const Home = lazy(() =>
  import("./pages/admin/Settings/components/SettingsHome")
)
const AboutWorkSpace = lazy(() => import("./pages/admin/AboutWorkSpace"))
const adminNalytics = lazy(() => import("./pages/admin/Settings/Member"))
const AccountProfile = lazy(() => import("./pages/admin/AccountProfile"))
const Legal = lazy(() => import("./pages/legal"))
const ZurichatBlog = lazy(() => import("./pages/blogs/components/zurichatBlog"))

const ManageMembers = lazy(() =>
  import("./pages/admin/manage_members/components/ManageMembers")
)
const Ebooks = lazy(() => import("./pages/ebooks"))
const Invitation = lazy(() => import("./pages/admin/Invitation"))
const Whyzurichat = lazy(() => import("./pages/WhyZuriChat/Whyzurichat"))
const Gateways = lazy(() =>
  import("./pages/admin/gateways/components/gateways")
)
const OnboardingHelp = lazy(() => import("./pages/LoginSignUpHelp/index"))
const DeleteWorkspace = lazy(() =>
  import("./pages/settings/components/deleteWorkspace")
)
const BookDemo = lazy(() => import("./pages/book-a-demo"))

const ChangeWorkspaceName = lazy(() =>
  import("./pages/admin/Settings/components/ChangeWorkspaceName")
)
const BlogDetails = lazy(() => import("./pages/blogs/components/BlogDetails"))
const CreateBlog = lazy(() => import("./pages/blogs/components/CreateBlog.jsx"))

const App = () => {
  // TODO: Suspended components should be grouped to alleviate staggered loading
  return (
    <BrowserRouter>
      <GeneralErrorBoundary>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <RedirectRoute path="/login">
            <Login />
          </RedirectRoute>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>

        <Switch>
          <Route path="/createworkspace">
            <Suspense fallback={<GeneralLoading />}>
              <CreateWorkSpaces />
            </Suspense>
          </Route>
          <Route path="/signout">
            <Suspense fallback={<GeneralLoading />}>
              <SignOut />
            </Suspense>
          </Route>
          <Route path="/about">
            <Suspense fallback={<GeneralLoading />}>
              <About />
            </Suspense>
          </Route>
          <Route path="/help">
            <Suspense fallback={<GeneralLoading />}>
              <Help />
            </Suspense>
          </Route>
          <Route path="/choose-workspace">
            <Suspense fallback={<GeneralLoading />}>
              <Workspace />
            </Suspense>
          </Route>
          <Route path="/features">
            <Suspense fallback={<GeneralLoading />}>
              <Features />
            </Suspense>
          </Route>
          <Route path="/invites/:id">
            <Suspense fallback={<GeneralLoading />}>
              <Invite />
            </Suspense>
          </Route>
          <Route path="/invite-request">
            <Suspense fallback={<GeneralLoading />}>
              <Inviterequest />
            </Suspense>
          </Route>
          <Route path="/send-request">
            <Suspense fallback={<GeneralLoading />}>
              <SendRequest />
            </Suspense>
          </Route>
          <Route path="/resources">
            <Suspense fallback={<GeneralLoading />}>
              <Resources />
            </Suspense>
          </Route>
          <Route path="/search">
            <Suspense fallback={<GeneralLoading />}>
              <Search />
            </Suspense>
          </Route>
          <Route path="/createBlog">
            <Suspense fallback={<GeneralLoading />}>
              <CreateBlog />
            </Suspense>
          </Route>
          <Route path="/blog/:title">
            <Suspense fallback={<GeneralLoading />}>
              <BlogDetails />
            </Suspense>
          </Route>
          <Route path="/blog">
            <Suspense fallback={<GeneralLoading />}>
              <Blog />
            </Suspense>
          </Route>
          <Route path="/pricing">
            <Suspense fallback={<GeneralLoading />}>
              <Pricing />
            </Suspense>
          </Route>
          <Route path="/plugins">
            <Suspense fallback={<GeneralLoading />}>
              <Plugins />
            </Suspense>
          </Route>
          <Route path="/security">
            <Suspense fallback={<GeneralLoading />}>
              <Security />
            </Suspense>
          </Route>
          <Route path="/downloads">
            <Suspense fallback={<GeneralLoading />}>
              <Download />
            </Suspense>
          </Route>
          <Route path="/ebooks">
            <Suspense fallback={<GeneralLoading />}>
              <Ebooks />
            </Suspense>
          </Route>
          <Route path="/downloadsMac">
            <Suspense fallback={<GeneralLoading />}>
              <DownloadsMac />
            </Suspense>
          </Route>
          <Route path="/contact-us">
            <Suspense fallback={<GeneralLoading />}>
              <ContactUs />
            </Suspense>
          </Route>
          <Route path="/careers">
            <Suspense fallback={<GeneralLoading />}>
              <Careers />
            </Suspense>
          </Route>
          <Route path="/terms">
            <Suspense fallback={<GeneralLoading />}>
              <TermsOfService />
            </Suspense>
          </Route>
          <Route path="/legal">
            <Suspense fallback={<GeneralLoading />}>
              <Legal />
            </Suspense>
          </Route>
          <Route path="/privacy">
            <Suspense fallback={<GeneralLoading />}>
              <PrivacyPolicy />
            </Suspense>
          </Route>
          <Route path="/open-marketplace" exact>
            <Suspense fallback={<GeneralLoading />}>
              <MarketPlace />
            </Suspense>
          </Route>
          <Route path="/dao-features">
            <Suspense fallback={<GeneralLoading />}>
              <DAO_Features />
            </Suspense>
          </Route>
          <Route path="/troubleshooting/onboarding-help">
            <Suspense fallback={<GeneralLoading />}>
              <OnboardingHelp />
            </Suspense>
          </Route>
          <Route path="/apps-integrations">
            <Suspense fallback={<GeneralLoading />}>
              <AppsAndIntegrations />
            </Suspense>
          </Route>
          <Route path="/ZurichatBlog">
            <Suspense fallback={<GeneralLoading />}>
              <ZurichatBlog />
            </Suspense>
          </Route>
          <Route path="/whyzurichat">
            <Suspense fallback={<GeneralLoading />}>
              <Whyzurichat />
            </Suspense>
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
            <Suspense fallback={<GeneralLoading />}>
              <Invitation />
            </Suspense>
          </Route>
          <Route path="/reset-password">
            <Suspense fallback={<GeneralLoading />}>
              <ResetPassword />
            </Suspense>
          </Route>
          <Route path="/change-password">
            <Suspense fallback={<GeneralLoading />}>
              <NewPassword />
            </Suspense>
          </Route>
          <Route path="/cookies-settings">
            <Suspense fallback={<GeneralLoading />}>
              <CookiesSetting />
            </Suspense>
          </Route>
          <Route path="/cookies-banner">
            <Suspense fallback={<GeneralLoading />}>
              <Cookies />
            </Suspense>
          </Route>
          <Route path="/book-a-demo">
            <Suspense fallback={<GeneralLoading />}>
              <BookDemo />
            </Suspense>
          </Route>

          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </GeneralErrorBoundary>
    </BrowserRouter>
  )
}
export default App
