import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core'; 

import CCoordForm from './CCoordForm';
import CPTable from './CPTable';

class CNear extends Component {
    render() {

        const { 
            getClosestPlaygrounds,
            playgrounds 
        } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                        <CCoordForm 
                            getClosestPlaygrounds={getClosestPlaygrounds}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <CPTable 
                            playgrounds={playgrounds}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CNear;