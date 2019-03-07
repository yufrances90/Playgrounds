import React, { Component } from 'react';

import CNewPlayGround from '../components/CNewPlayGround';

import {
    createNewPlayground
} from '../utils/apiUtils'

class PNewPlayground extends Component {

    state = {
        name: '',
        streetNumber: '',
        street: '',
        city: '',
        stateS: '',
        country: ''
    }

    handleChangeValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmitForm(event) {
        
        const {
            name,
            streetNumber,
            street,
            city,
            stateS,
            country
        } = this.state;

        const address = `${streetNumber} ${street}, ${city}, ${stateS}, ${country}`;

        console.log(address);

        createNewPlayground(address, name);
    }

    render() {

        const {
            name,
            streetNumber,
            street,
            city,
            stateS,
            country
        } = this.state;

        return (
            <div>
                <CNewPlayGround 
                    name={name}
                    streetNumber={streetNumber}
                    street={street}
                    city={city}
                    stateS={stateS}
                    country={country}
                    handleChangeValue={this.handleChangeValue.bind(this)}
                    handleSubmitForm={this.handleSubmitForm.bind(this)}
                />
            </div>
        );
    }
}

export default PNewPlayground;