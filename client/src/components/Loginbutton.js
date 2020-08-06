import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Link
      onClick={() => loginWithRedirect()}
      palette="primary: deepOrange"
      className="btn-margin"
    >
      <MenuItem>Log In</MenuItem>
      
    </Link>
  );
};


export default LoginButton;