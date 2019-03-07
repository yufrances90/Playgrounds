import React, { Component } from 'react';

import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';
import {
    Create,
    List
} from '@material-ui/icons';

import {
    Link
} from 'react-router-dom';

class CNavbar extends Component {

    render() {
        return (
            <div>
                <AppBar position="static" className="app-navbar">
                    <Toolbar>
                        <Link to="/" className="navbar-link">
                            <Typography variant="title" color="inherit">
                                Playgrounds
                            </Typography>
                        </Link>
                        <span className="links"> 
                            <Link to="/create" className="navbar-link">
                                <Typography color="inherit" variant="button">
                                    <Create /> Create
                                </Typography>
                            </Link>
                            <Link to="/" className="navbar-link">
                                <Typography color="inherit" variant="button">
                                    <List /> View List
                                </Typography>
                            </Link>
                        </span>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CNavbar;