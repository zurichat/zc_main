import { Route, Redirect } from "react-router";
const RedirectRoute = ({ children, ...rest }) => {
  const isLoggedIn = sessionStorage.getItem("session_id");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
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
export default RedirectRoute;
