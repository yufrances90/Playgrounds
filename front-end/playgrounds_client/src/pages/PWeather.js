import React, { Component } from 'react';

import {
    LinearProgress
} from '@material-ui/core';

import CWeather from '../components/CWeather';

import {
    getAllPlaygrounds
} from '../utils/apiUtils';

class PWeather extends Component {

    state = {
        playgrounds: []
    }

    async componentDidMount() {

        const pgList = await getAllPlaygrounds();

        this.setState({
            playgrounds: pgList
        });
    }

    render() {

        const { playgrounds } = this.state;

        if (playgrounds.length === 0) {
            return <LinearProgress />
        }

        console.log(playgrounds);

        return (
            <div>
                <CWeather />
            </div>
        );
    }
}

export default PWeather;