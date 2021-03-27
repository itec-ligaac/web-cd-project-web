import React from "react";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
    });
    this.lng = 0;
    this.lat = 0;
    this.zoom = 1;
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: "absolute",
      top: 80,
      bottom: 20,
      width: "92%",
    };

    return (
      <>
        <div style={style} ref={(el) => (this.mapContainer = el)} />
      </>
    );
  }
}
