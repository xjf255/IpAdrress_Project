import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L, { LatLngExpression } from 'leaflet'
import MarkerIcon from '../assets/location.svg'
import { useEffect } from 'react';

const customIcon = new L.Icon({
  iconUrl: MarkerIcon,
  iconSize: [46, 56],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
})

interface Props {
  position: LatLngExpression
}

const NewCenter = ({ position }: Props) => {
  const map = useMap()
  useEffect(() => {
    map.setView(position, map.getZoom())
  }, [position, map])

  return null
}

export const Map = ({ position }: Props = { position: [51.505, -0.09] }) => {

  return (
    <div className="map" id="map">
      <MapContainer style={{ height: "100%", width: "100%" }} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            This is your position.
          </Popup>
        </Marker>
        <NewCenter position={position} />
      </MapContainer>
    </div>
  )
}