import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';

import CPList from './CPList';

class CListPlaygrounds extends Component {
    render() {

        const { playgrounds, setSelectedId } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={4}>
                        <CPList 
                            playgrounds={playgrounds}
                            setSelectedId={setSelectedId}
                        />
                    </Grid>
                    <Grid item xs={8}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CListPlaygrounds;