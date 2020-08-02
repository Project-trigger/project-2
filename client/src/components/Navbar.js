import React from 'react'
import { Button, Menu, MenuItem, SvgIcon, AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
<<<<<<< HEAD

=======
import { Link } from "react-router-dom";
>>>>>>> a4f7018a63d92525dc2eced12dea5b4c97237cb9

const Navbar = () => {
    const handleClose = () => {
        setAnchorEl(null);
      };
    
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const [anchorEl, setAnchorEl] = React.useState(null);

    return(
        <div>
        <AppBar position="static">
          <Toolbar style={{backgroundColor: "#f77f00"}} variant="dense">
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
<<<<<<< HEAD
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Random Debate</MenuItem>
              <MenuItem onClick={handleClose}>Top Debates</MenuItem>
              <MenuItem onClick={handleClose}>New Debates</MenuItem>
=======
              <MenuItem>Profile</MenuItem>
              <Link to="/debate"><MenuItem>Random Debate</MenuItem></Link>
              <Link to="/trending"><MenuItem>Top Debates</MenuItem></Link>
              <Link to="/newdebates"><MenuItem>New Debates</MenuItem></Link>
>>>>>>> a4f7018a63d92525dc2eced12dea5b4c97237cb9
            </Menu>
          </Toolbar>
        </AppBar>
      </div>


    )
}
export default Navbar;