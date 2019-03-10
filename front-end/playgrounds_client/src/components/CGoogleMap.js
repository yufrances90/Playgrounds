import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import {
    LocationOn
} from '@material-ui/icons';

const AnyReactComponent = () => <LocationOn color="secondary" />;

class CGoogleMap extends Component {
    render() {

        const { lat, lng, googleApiKey, name } = this.props;

        console.log(name);

        return (
            <div className="g-map-container">
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: googleApiKey
                    }}
                    center={{
                        lat,
                        lng
                    }}
                    defaultZoom={18}
                >
                    <AnyReactComponent
                        lat={lat}
                        lng={lng}
                        text={name}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default CGoogleMap;