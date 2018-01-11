import React from 'react'

import './Header.css'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
    root: {
        width: '100%',
    },
};

const Header = () => {
    return(
        <div className={styles.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        <Link to="/" className="home">Home</Link>
                        <Link to="/profile" className="nav-items">Profile</Link>
                        <Link to="/about" className="nav-items">About</Link>
                        <Link to="/songForm" className="nav-items">Add Song</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Header);