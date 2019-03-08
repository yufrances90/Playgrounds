import React, { Component } from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    Tooltip
} from '@material-ui/core';
import {
    AddLocation,
    List,
    WbCloudy,
    NearMe
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
                                <Tooltip title="Add New Location">
                                    <Typography color="inherit" variant="button">
                                        <AddLocation /> 
                                    </Typography>
                                </Tooltip>
                            </Link>
                            <Link to="/" className="navbar-link">
                                <Tooltip title="View List of Locations">
                                    <Typography color="inherit" variant="button">
                                        <List /> 
                                    </Typography>
                                </Tooltip>
                            </Link>
                            <Link to="/weather" className="navbar-link">
                                <Tooltip title="Check Weather">
                                    <Typography color="inherit" variant="button">
                                        <WbCloudy /> 
                                    </Typography>
                                </Tooltip>
                            </Link>
                            <Link to="/near" className="navbar-link">
                                <Tooltip title="Check Closest Playgrounds">
                                    <Typography color="inherit" variant="button">
                                        <NearMe /> 
                                    </Typography>
                                </Tooltip>
                            </Link>
                        </span>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CNavbar;