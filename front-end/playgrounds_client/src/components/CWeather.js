import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';

import CSearchBox from './CSearchBox';
import CWeatherDetails from './CWeatherDetails';

class CWeather extends Component {
    render() {

        const { 
            playgrounds,
            handleDateChange,
            handlePlaygroundChange,
            selectedPId,
            selectedDate,
            handleSubmit
        } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        <CSearchBox 
                            playgrounds={playgrounds}
                            handleDateChange={handleDateChange}
                            handlePlaygroundChange={handlePlaygroundChange}
                            selectedPId={selectedPId}
                            selectedDate={selectedDate}
                            handleSubmit={handleSubmit}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        {
                            playgrounds.length !== 0 && 
                            <CWeatherDetails />
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CWeather;