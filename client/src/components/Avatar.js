import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    }
}));

export default function LetterAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
           
            <Nav.Link
              as={RouterNavLink}
              to="/profile"
              exact
              activeClassName="router-link-exact-active"
            ><Avatar className={classes.orange}></Avatar></Nav.Link> 
        </div>
    );
}