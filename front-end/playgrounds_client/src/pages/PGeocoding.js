import React, { Component } from 'react';

import CGeocoding from '../components/CGeocoding';

import {
    createNewPlayground
} from '../utils/apiUtils'

class PGeocoding extends Component {

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
                <CGeocoding 
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

export default PGeocoding;