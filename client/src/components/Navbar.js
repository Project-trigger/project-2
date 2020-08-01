import React from 'react'
import { Button, Menu, MenuItem, SvgIcon, AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Random Debate</MenuItem>
              <MenuItem onClick={handleClose}>Top Debates</MenuItem>
              <MenuItem onClick={handleClose}>New Debates</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>


    )
}
export default Navbar;