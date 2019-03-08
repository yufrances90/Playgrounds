import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';

import CSearchBox from './CSearchBox';
import CWeatherDetails from './CWeatherDetails';

class CWeather extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        <CSearchBox />
                    </Grid>
                    <Grid item xs={9}>
                        <CWeatherDetails />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CWeather;