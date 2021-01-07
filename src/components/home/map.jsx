import 'leaflet/dist/leaflet.css';
import { isNumeral } from 'numeral';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { showDataOnMap, sortData } from '../../api/util';
import { Icon } from "leaflet"
export default function GooM({mapCountries,casesType}) {
    const iconPosi = new Icon({
        iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
        iconSize: [25, 25],
        className: "icon"
    })
    const LocationMarker = () => {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                console.log(e)
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom(10))
            },
        })
        return position === null ? null : (
            <Marker
                position={position}
                icon={iconPosi}
            >
                <Popup>You are here</Popup>
            </Marker>
        )
    }
    return (
        <MapContainer
            maxZoom={12}
            center={[21.04, 105.79]}
            zoom={2}
            style={{ height: "50vh", width: "100%" }}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; 
                    <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            {showDataOnMap(mapCountries, casesType)}
        </MapContainer>

    )
}
