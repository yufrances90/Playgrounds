import React, { Component } from 'react';

import {
    Dialog,
    DialogTitle,
    DialogContent
} from '@material-ui/core';

import CAddressForm from './CAddressForm';

class CAddressModal extends Component {
    render() {

        const { 
            open, 
            handleClose,
            handleSubmitForm,
            playground 
        } = this.props;

        return (
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Edit Playground Information
                </DialogTitle>
                <DialogContent>
                    <CAddressForm
                        handleSubmitForm={handleSubmitForm}
                        playground={playground}
                    />
                </DialogContent>
            </Dialog>
        );
    }
}

export default CAddressModal;