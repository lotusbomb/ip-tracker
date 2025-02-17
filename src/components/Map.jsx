/* eslint-disable react/prop-types */

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../images/icon-location.svg";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const Map = ({ coordinate }) => {
  const marker = new L.icon({ iconUrl: markerIcon });
  let state = {
    keyMAP: Math.random(),
  };
  return (
    <MapContainer
      key={state.keyMAP}
      center={[coordinate.lat, coordinate.lng]}
      zoom={15}
      className="w-full h-3/5 z-0"
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      >
        <Marker
          position={[coordinate.lat, coordinate.lng]}
          icon={marker}
        ></Marker>
      </TileLayer>
    </MapContainer>
  );
};

export default Map;