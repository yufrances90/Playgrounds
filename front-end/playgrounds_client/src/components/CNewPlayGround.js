import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';

import CAddressForm from './CAddressForm';

class CNewPlayground extends Component {
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
            <div>
                <Grid container>
                    <Grid item xs={4}>
                        <CAddressForm 
                            name={name}
                            streetNumber={streetNumber}
                            street={street}
                            city={city}
                            stateS={stateS}
                            country={country}
                            handleChangeValue={handleChangeValue}
                            handleSubmitForm={handleSubmitForm}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CNewPlayground;