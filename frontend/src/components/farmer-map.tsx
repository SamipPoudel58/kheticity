import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';

const MapWithInitialView = () => {
  const position = { lat: 51.505, lng: -0.09 };

  return (
    <MapContainer
      style={{ height: '400px', width: '400px' }}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyMarker position={position} />
    </MapContainer>
  );
};

const MyMarker = ({ position }: { position: { lat: number; lng: number } }) => {
  const map = useMapEvents({
    dragend(e: any) {
      console.log(e);
    },
  });
  return <Marker draggable position={position}></Marker>;
};

export default MapWithInitialView;
