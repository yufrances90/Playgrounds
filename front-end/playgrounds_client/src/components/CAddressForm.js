import React, { Component } from 'react';

import {
    TextField,
    Button
} from '@material-ui/core';
import {
    Edit
} from '@material-ui/icons';

class CAddressForm extends Component {

    render() {

        const {
            name,
            streetNumber,
            street,
            city,
            stateS,
            country,
            handleChangeValue,
            handleSubmitForm
        } = this.props;

        return (
            <form className="address-form">
                <TextField 
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={handleChangeValue}
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
                    onChange={handleChangeValue}
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
                    onChange={handleChangeValue}
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
                    onChange={handleChangeValue}
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
                    onChange={handleChangeValue}
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
                    onChange={handleChangeValue}
                />
                <br />
                <br />
                <Button 
                    variant="outlined" 
                    color="primary" 
                    fullWidth
                    onClick={handleSubmitForm}
                >
                    <Edit />
                    Submit
                </Button>
            </form>
        );
    }
}

export default CAddressForm;