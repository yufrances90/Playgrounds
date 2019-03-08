import React, { Component } from 'react';

import {
    LinearProgress
} from '@material-ui/core';

import CListPlaygrounds from '../components/CListPlaygrounds';

import {
    getAllPlaygrounds,
    getPlaygroundById
} from '../utils/apiUtils';
import {
    formatAddress
} from '../utils/helpers';

class PListPlaygrounds extends Component {

    state = {
        playgrounds: [],
        selectedPlayground: undefined
    }

    async componentDidMount() {

        const pgList = await getAllPlaygrounds();

        this.setState({
            playgrounds: pgList
        });
    }

    async setSelectedPlayground(id) {

        const response = await getPlaygroundById(id);

        this.setState({
            selectedPlayground: response
        });
    }

    handleSubmitForm(obj, type) {

        /**
         * type
         *  0: name change
         *  1: address change
         *  2: nothing change
         */
        if (type === 2) {
            return;
        }

        const { name, id } = obj;

        const address = formatAddress(obj);

        const reqObj = {
            id,
            name,
            address,
            type
        };

        console.log(reqObj);
    }

    render() {

        const { playgrounds, selectedPlayground } = this.state;

        if (playgrounds.length === 0) {
            return <LinearProgress />
        }

        return (
            <div>
                <CListPlaygrounds
                    playgrounds={playgrounds}
                    setSelectedPlayground={this.setSelectedPlayground.bind(this)} 
                    selectedPlayground={selectedPlayground}
                    handleSubmitForm={this.handleSubmitForm.bind(this)}
                />
                
            </div>
        );
    }
}

export default PListPlaygrounds;