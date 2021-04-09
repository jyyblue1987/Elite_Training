import {
	Route,
    Redirect
  } from "react-router-dom";

export default function UnauthenticatedRoute({ component: C, appProps, ...rest }) {    
    // if( !appProps.isAuthenticated )
    //     console.log("UnauthenticatedRoute", appProps.isAuthenticated, C);
    return (
      <Route
        {...rest}
        render={props =>
            !appProps.isAuthenticated
            ? <C {...props} {...appProps} />
            : <Redirect to="/" />}
      />
    );
  }