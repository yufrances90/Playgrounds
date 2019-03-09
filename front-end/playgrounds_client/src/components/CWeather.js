import React, { Component } from 'react';

import {
    Grid,
    LinearProgress
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
            handleSubmit,
            data,
            playground
        } = this.props;

        if (playgrounds === undefined || playgrounds.length === 0) {
            return <LinearProgress />
        }

        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                        <CSearchBox 
                            playgrounds={playgrounds}
                            handleDateChange={handleDateChange}
                            handlePlaygroundChange={handlePlaygroundChange}
                            selectedPId={selectedPId}
                            selectedDate={selectedDate}
                            handleSubmit={handleSubmit}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <CWeatherDetails 
                            data={data}
                            playground={playground}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CWeather;