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
        playgrounds: [],
        selectedDate: new Date(),
        selectedPId: ''
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

    handleSubmit(event) {
        
        const { selectedPId, selectedDate } = this.state;

        console.log(selectedPId, selectedDate);
    }

    render() {

        const { 
            playgrounds, 
            selectedPId,
            selectedDate
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
                />
            </div>
        );
    }
}

export default PWeather;