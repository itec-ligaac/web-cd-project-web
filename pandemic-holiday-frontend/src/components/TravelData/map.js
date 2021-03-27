import React from "react";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapp = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY2F0YWxpbmNoaXRhIiwiYSI6ImNrbXJ6c2oyczBjbTEybm14bHdvaWpta24ifQ.I0p207zOOFAoHTHyf4Uueg",
});

export const Map = () => {
  return (
    <Mapp
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        position: "absolute",
        top: 80,
        bottom: 20,
        width: "92%",
      }}
    />
  );
};
