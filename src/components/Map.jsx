import { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "./../../node_modules/leaflet/dist/leaflet.css"
import L from 'leaflet';
import './../../node_modules/leaflet/dist/leaflet.css';
import MarkerIcon from "./../assets/images/map-marker-alt.png";
import mapPrev from "./../assets/images/map-preview.png"


function Map() {
    const [isMap, setMap] = useState(false)
    const coords = [50.4941893, 30.4655718];
    const customMarker = new L.Icon({
        iconUrl: MarkerIcon,
        iconSize: [47, 62],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    })
    return (
        <div id="contact-map">
            {
                isMap
                    ?
                    <MapContainer center={coords} zoom={15} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png?api_key=fe19169d-45e8-450e-96d4-aa9900515de6"
                        />
                        <Marker position={coords} icon={customMarker}>
                        </Marker>
                    </MapContainer>
                    :
                    <>

                        <a id="map_active" onClick={() => { setMap(true) }}>
                            <div className="map-text">Please click to interactive map</div>
                            <img src={mapPrev} alt="Contact map" />
                        </a>

                    </>
            }

            {/* <a href="javascript:void(0)" id="map_active">
                <div className="map-text">Click to interactive map</div>
                <img src="assets/images/prev-map.jpg" alt="Contact map" />
            </a> */}
        </div>
    )
}

export default Map