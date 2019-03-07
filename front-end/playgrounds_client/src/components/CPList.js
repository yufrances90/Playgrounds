import React, { Component } from 'react';

import {
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';

class CPList extends Component {
    render() {

        const { playgrounds } = this.props;

        return (
            <div>
                <List>
                    {playgrounds.map((element) => (
                        <ListItem button key={element._id}>
                            <ListItemText primary={element.name} secondary={element.address} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default CPList;