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
        country: '',
        type: -1
    }

    processAddressStr(address) {
        
        const parts = address.split(",");

        const updatedParts = parts.map(part => {
            return part.trim();
        });

        const [ streetWithNumber, city, stateS, country ] = updatedParts;

        const [ streetNumber, ...others ] = streetWithNumber.split(" ");

        const street = others.join(" ");

        return {
            streetNumber,
            street,
            city,
            stateS,
            country
        };
    }

    componentDidMount() {

        const { playground } = this.props;

        if(playground !== undefined) {

            const { name, address } = playground;

            const addressInfo = this.processAddressStr(address);

            const {
                streetNumber,
                street,
                city,
                stateS,
                country
            } = addressInfo;

            this.setState({
                name,
                streetNumber,
                street,
                city,
                stateS,
                country,
                type: 2
            });
        }
    }

    handleChangeValue(event) {

        const { type } = this.state;

        const attributeName = event.target.name;

        if (type !== 1) {

            if (attributeName !== "name") {
                this.setState({
                    type: 1
                });
            } else {
                this.setState({
                    type: 0
                });
            }
        }

        this.setState({
            [attributeName]: event.target.value
        });
    }

    handleSubmitBtnClick(event) {

        const { type, ...obj } = this.state;

        this.props.handleSubmitForm(obj, type);
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