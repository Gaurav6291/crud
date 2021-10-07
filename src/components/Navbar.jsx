import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import makeStyles from '@mui/styles/makeStyles'
import { NavLink } from 'react-router-dom';
const useStyle = makeStyles({
    header : {
        background: '#111111 !important'
    },
    tabs:{
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
});

const Navbar = () => {

    const classes = useStyle();

    return (
       <>
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="/" exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="/add" exact>Add a user</NavLink>
            </Toolbar>
        </AppBar>
       </>
    )
}

export default Navbar
