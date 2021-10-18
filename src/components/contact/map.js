import React from 'react';
import { LoadScript, GoogleMap } from 'react-google-maps';

const Map = props => {
    return (
        <LoadScript id="script-loader" googleMapsApiKey={YOUR_API_KEY}>
            <GoogleMaps id="example-map" center={props.center} />
        </LoadScript>
    );
}

export default Map;