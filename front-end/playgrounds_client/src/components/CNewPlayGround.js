import React, { Component } from 'react';

import {
    Grid,
    LinearProgress
} from '@material-ui/core';

import CAddressForm from './CAddressForm';
import CGoogleMap from './CGoogleMap';

class CNewPlayground extends Component {
    render() {

        const {
            handleSubmitForm,
            coords,
            googleApiKey
        } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={4}>
                        <CAddressForm
                            handleSubmitForm={handleSubmitForm}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        {
                            coords &&
                            <CGoogleMap
                                lat={coords.lat}
                                lng={coords.lng}
                                googleApiKey={googleApiKey}
                            />
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CNewPlayground;