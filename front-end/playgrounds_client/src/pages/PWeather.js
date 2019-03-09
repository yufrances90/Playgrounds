import React, { Component } from 'react';

import {
    LinearProgress
} from '@material-ui/core';

import CWeather from '../components/CWeather';

import {
    getAllPlaygrounds,
    getPlaygroundById,
    getPastWeatherInfo
} from '../utils/apiUtils';
import {
    processWeatherData
} from '../utils/helpers';

class PWeather extends Component {

    state = {
        playgrounds: [],
        selectedDate: new Date(),
        selectedPId: '',
        data: undefined,
        selectedPlayground: undefined
    }

    async componentDidMount() {

        const pgList = await getAllPlaygrounds();

        this.setState({
            playgrounds: pgList
        });
    }

    handleDateChange(date) {
        this.setState({
            selectedDate: date
        });
    }

    handlePlaygroundChange(event) {
        this.setState({
            selectedPId: event.target.value
        });
    }

    async handleSubmit(event) {
        
        const { selectedPId } = this.state;

        const playground = await getPlaygroundById(selectedPId);

        const { coords } = playground;

        const reqObj = {
            coord: {
                ...coords
            },
            id: selectedPId
        }

        const response = await getPastWeatherInfo(reqObj);

        const data = processWeatherData(response);

        this.setState({
            data,
            selectedPlayground: playground
        });
    }

    render() {

        const { 
            playgrounds, 
            selectedPId,
            selectedDate,
            data,
            selectedPlayground
        } = this.state;

        if (playgrounds.length === 0) {
            return <LinearProgress />
        }

        return (
            <div>
                <CWeather 
                    playgrounds={playgrounds}
                    handleDateChange={this.handleDateChange.bind(this)}
                    handlePlaygroundChange={this.handlePlaygroundChange.bind(this)}
                    selectedPId={selectedPId}
                    selectedDate={selectedDate}
                    handleSubmit={this.handleSubmit.bind(this)}
                    data={data}
                    playground={selectedPlayground}
                />
            </div>
        );
    }
}

export default PWeather;