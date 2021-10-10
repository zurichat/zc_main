import { Route, Redirect} from "react-router";
const SecureRoute=({ children, ...rest })=>{
    const isLoggedIn = sessionStorage.getItem("session_id");
  return(
     <Route {...rest} render={({location}) => isLoggedIn ? 
   (
         <Redirect
            to={{
              pathname: "/choose-workspace",
              state: { from: location }
            }}  />
        ) : (
           children
        )
     } />
  )
    }
    export default SecureRoute;




