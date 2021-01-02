import React from 'react';
import {GoogleMap, withScriptjs,withGoogleMap} from 'react-google-maps';

function googleMap() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat:21.232171,lng:105.6434565}}
        />

    )
}
const WrappedMap = withScriptjs(withGoogleMap(googleMap));
export default function Map() {
    return (
        <div style={{ width: '1005', height: '100vh' }}>
            {/* <googleMapReact */}
            <WrappedMap/>
        </div>
    )
}
