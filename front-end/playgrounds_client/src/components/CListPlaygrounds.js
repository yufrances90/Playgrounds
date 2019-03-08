import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';

import CPList from './CPList';
import CPlayground from './CPlayground';

class CListPlaygrounds extends Component {
    render() {

        const { 
            playgrounds, 
            setSelectedPlayground, 
            selectedPlayground,
            handleSubmitForm,
            handleDeletePlayground
        } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={4}>
                        <CPList 
                            playgrounds={playgrounds}
                            setSelectedPlayground={setSelectedPlayground}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        {
                            selectedPlayground && 
                            <CPlayground
                                selectedPlayground={selectedPlayground} 
                                handleSubmitForm={handleSubmitForm}
                                handleDeletePlayground={handleDeletePlayground}
                            />
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CListPlaygrounds;