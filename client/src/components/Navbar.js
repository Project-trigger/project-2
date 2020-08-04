import React from 'react'
import { Button, Menu, MenuItem, SvgIcon, AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#f77f00" }} variant="dense">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <SvgIcon component={MenuIcon} style={{ color: "white" }} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>Profile</MenuItem>
            <Link to="/debate"><MenuItem>Random Debate</MenuItem></Link>
            <Link to="/trending"><MenuItem>Top Debates</MenuItem></Link>
            <Link to="/newdebates"><MenuItem>New Debates</MenuItem></Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>


  )
}
export default Navbar;