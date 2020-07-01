import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { Component } from 'react';
import '../App.css';



export default class UserMap extends Component {
    state = {
        center: [
            parseFloat(this.props.location.latitude), 
            parseFloat(this.props.location.longitude)
        ],
        zoom: 13,
    }
    render() {
        console.log(this.props);
        console.log(this.state);

      return (
          <div>
            <Map center={this.state.center} zoom={this.state.zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={this.state.center}>
                <Popup>
                This is my position!
                </Popup>
            </Marker>
            </Map>
        </div>
      )
    }
  }