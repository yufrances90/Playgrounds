import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';

import CAddressForm from './CAddressForm';

class CNewPlayground extends Component {
    render() {

        const {
            handleSubmitForm
        } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={4}>
                        <CAddressForm
                            handleSubmitForm={handleSubmitForm}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CNewPlayground;