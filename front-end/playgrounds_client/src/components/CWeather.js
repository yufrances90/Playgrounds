import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';

import CSearchBox from './CSearchBox';

class CWeather extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={4}>
                        <CSearchBox />
                    </Grid>
                    <Grid item xs={8}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CWeather;