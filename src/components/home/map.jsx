import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function googleMap() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 21.232171, lng: 105.6434565 }}
        />

    )
}
const WrappedMap = withScriptjs(withGoogleMap(googleMap));
export default function Map() {
    console.log(process.env.REACT_APP_GOOGLE_KEY);
    return (
        <div style={{ width: '1005', height: '100vh' }}>
            {/* <googleMapReact */}
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCewLDL-bRWuvjKNkIzid8X6Ny22BpjQQ8`}
                loadingElement={ <div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement= {<div style={{ height: `100%` }} />}
            />
        </div>
    )
}
