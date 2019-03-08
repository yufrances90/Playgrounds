import React, { Component } from 'react';

import {
    TextField,
    Button
} from '@material-ui/core';
import {
    Edit
} from '@material-ui/icons';

class CAddressForm extends Component {

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

    handleSubmitBtnClick(event) {

        const obj = this.state;

        this.props.handleSubmitForm(obj);
    }

    render() {

        const {
            name,
            streetNumber,
            street,
            city,
            stateS,
            country,
        } = this.state;

        return (
            <form className="address-form">
                <TextField 
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={this.handleChangeValue.bind(this)}
                />
                <br />
                <br />
                <TextField 
                    id="street-number"
                    name="streetNumber"
                    label="Street #"
                    variant="outlined"
                    fullWidth
                    value={streetNumber}
                    onChange={this.handleChangeValue.bind(this)}
                />
                <br />
                <br />
                <TextField 
                    id="street"
                    name="street"
                    label="Street"
                    variant="outlined"
                    fullWidth
                    value={street}
                    onChange={this.handleChangeValue.bind(this)}
                />
                <br />
                <br />
                <TextField 
                    id="city"
                    name="city"
                    label="City"
                    variant="outlined"
                    fullWidth
                    value={city}
                    onChange={this.handleChangeValue.bind(this)}
                />
                <br />
                <br />
                <TextField 
                    id="state"
                    name="stateS"
                    label="State"
                    variant="outlined"
                    fullWidth
                    value={stateS}
                    onChange={this.handleChangeValue.bind(this)}
                />
                <br />
                <br />
                <TextField 
                    id="country"
                    name="country"
                    label="Country"
                    variant="outlined"
                    fullWidth
                    value={country}
                    onChange={this.handleChangeValue.bind(this)}
                />
                <br />
                <br />
                <Button 
                    variant="outlined" 
                    color="primary" 
                    fullWidth
                    onClick={this.handleSubmitBtnClick.bind(this)}
                >
                    <Edit />
                    Submit
                </Button>
            </form>
        );
    }
}

export default CAddressForm;