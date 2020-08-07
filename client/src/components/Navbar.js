import React from "react";
import {
  Button,
  Menu,
  MenuItem,
  SvgIcon,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logoutbutton";
import LoginButton from "./Loginbutton";

const Navbar = () => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isAuthenticated, user } = useAuth0();

  let authMessage = "";
  if (isAuthenticated) {
    authMessage = `Hi ${user.name}`;
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar
          style={{ backgroundColor: "#f77f00" }}
          variant="dense"
        >
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <SvgIcon
              component={MenuIcon}
              style={{ color: "white" }}
            />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Nav.Link
              as={RouterNavLink}
              to="/profile"
              exact
              activeClassName="router-link-exact-active"
            >
              Profile
            </Nav.Link>
            <Link to="/debate">
              <MenuItem>View Debates</MenuItem>
            </Link>
            <Link to="/newdebates">
              <MenuItem>Post Debate</MenuItem>
            </Link>
            <Link to="/">
              {" "}
              {isAuthenticated ? (<>{" "}
                  <LogoutButton />{" "}
                </>
              ) : (
                <LoginButton />
              )}{" "}
            </Link>
          </Menu>
          <div>{authMessage}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
