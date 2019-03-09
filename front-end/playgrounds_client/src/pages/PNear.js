import React, { Component } from 'react';

import CNear from '../components/CNear';

import {
    findClosestPlaygroundsByCoord
} from '../utils/apiUtils';

class PNear extends Component {

    state = {
        playgrounds: []
    }

    async getClosestPlaygrounds(coord) {
       
        const response = await findClosestPlaygroundsByCoord(coord);

        this.setState({
            playgrounds: response
        })
    }

    render() {

        const { playgrounds } = this.state;

        return (
            <div>
                <CNear 
                    getClosestPlaygrounds={this.getClosestPlaygrounds.bind(this)}
                    playgrounds={playgrounds}
                />
            </div>
        );
    }
}

export default PNear;