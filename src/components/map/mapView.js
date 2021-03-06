import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './mapStyles.css';
import MenuLeft from '../utils/menuLeft'
import Header from '../utils/header'

class MapView extends Component {
  render() {
    return (
        <div className="App">
            <MenuLeft />
            <div className="body">
                <Header />
                <div className="title" >
                    Map
                </div>
                <div className="content">
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
  }
}

export default MapView;
