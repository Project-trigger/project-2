import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Link
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      variant="danger"
      className="btn-margin"
    >
      <MenuItem>Log Out</MenuItem>
    </Link>
  );
};

export default LogoutButton;