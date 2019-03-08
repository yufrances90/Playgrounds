import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core'; 

import CCoordForm from './CCoordForm';

class CNear extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                        <CCoordForm />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CNear;