import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"

export interface Props {
    latitude: number
    longitude: number
}

const Map = (props: Props) => {


    const MapFlyTo = () => {
        // flies to updated marker
        const map = useMap();
        window.innerWidth <= 1200 
            ? map.flyTo([(props.latitude + 0.005), props.longitude], 16)
            : map.flyTo([props.latitude, props.longitude], 13)
        return null;
    }

    return (
        <MapContainer
            id="map"
            center={[props.latitude, props.longitude]} // array of latitude and longitude of where the map should look
            zoom={1}
            zoomControl={ window.innerWidth <= 1200 ? false : true} 
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapFlyTo />
            <Marker position={[props.latitude, props.longitude]}>
                <Popup>
                    Latitude : {props.latitude}
                    <br />
                    Longitude : {props.longitude}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
