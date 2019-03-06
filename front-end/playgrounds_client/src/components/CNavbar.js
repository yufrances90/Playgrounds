import React, { Component } from 'react';

import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';

class CNavbar extends Component {

    render() {
        return (
            <div>
                <AppBar position="static" className="app-navbar">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Playgrounds
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CNavbar;