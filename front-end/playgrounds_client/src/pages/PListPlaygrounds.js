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
        playgrounds: [],
        selectedId: undefined
    }

    async componentDidMount() {

        const pgList = await getAllPlaygrounds();

        this.setState({
            playgrounds: pgList
        });
    }

    setSelectedId(id) {
        this.setState({
            selectedId: id
        });
    }

    render() {

        const { playgrounds, selectedId } = this.state;

        if (playgrounds.length === 0) {
            return <LinearProgress />
        }

        return (
            <div>
                <CListPlaygrounds
                    playgrounds={playgrounds}
                    setSelectedId={this.setSelectedId.bind(this)} 
                />
                {selectedId && <span>Selected ID: {this.state.selectedId}</span>}
            </div>
        );
    }
}

export default PListPlaygrounds;