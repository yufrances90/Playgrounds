import React, { Component } from 'react';

import CNewPlayGround from '../components/CNewPlayGround';

import {
    createNewPlayground
} from '../utils/apiUtils'

class PNewPlayground extends Component {

    handleSubmitForm(obj) {
        
        const {
            name,
            streetNumber,
            street,
            city,
            stateS,
            country
        } = obj;

        const address = `${streetNumber} ${street}, ${city}, ${stateS}, ${country}`;

        console.log(address);

        createNewPlayground(address, name);
    }

    render() {

        return (
            <div>
                <CNewPlayGround
                    handleSubmitForm={this.handleSubmitForm.bind(this)}
                />
            </div>
        );
    }
}

export default PNewPlayground;