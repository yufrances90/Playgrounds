import React, { Component } from 'react';

import {
    connect
} from 'react-redux';

import CNewPlayGround from '../components/CNewPlayGround';

import {
    createNewPlayground
} from '../utils/apiUtils';
import {
    formatAddress
} from '../utils/helpers';

class PNewPlayground extends Component {

    state = {
        coords: undefined
    }

    async handleSubmitForm(obj, type) {

        const { name } = obj;

        const address = formatAddress(obj);

        console.log(address);

        const data = await createNewPlayground(address, name);

        if (!data) {
            return;
        }

        this.setState({
            coords: data
        });
    }

    render() {

        const { coords } = this.state;

        const { googleApiKey } = this.props;

        return (
            <div>
                <CNewPlayGround
                    handleSubmitForm={this.handleSubmitForm.bind(this)}
                    coords={coords}
                    googleApiKey={googleApiKey}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ googleApiKey }) => {
    return {
        googleApiKey
    };
}

export default connect(mapStateToProps)(PNewPlayground);