import React, { Component } from 'react';

import CNewPlayGround from '../components/CNewPlayGround';

import {
    createNewPlayground
} from '../utils/apiUtils';
import {
    formatAddress
} from '../utils/helpers';

class PNewPlayground extends Component {

    handleSubmitForm(obj, type) {

        const { name } = obj;

        const address = formatAddress(obj);

        console.log(address);

        createNewPlayground(address, name);
    }

    render() {

        return (
            <div>
                <CNewPlayGround
                    handleSubmitForm={this.handleSubmitForm.bind(this)}
                />
            </div>
        );
    }
}

export default PNewPlayground;