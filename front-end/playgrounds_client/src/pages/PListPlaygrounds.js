import React, { Component } from 'react';

import {
    LinearProgress
} from '@material-ui/core';

import CListPlaygrounds from '../components/CListPlaygrounds';

import {
    getAllPlaygrounds
} from '../utils/apiUtils';

class PListPlaygrounds extends Component {

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

        return (
            <div>
                <CListPlaygrounds
                    playgrounds={playgrounds} 
                />
            </div>
        );
    }
}

export default PListPlaygrounds;