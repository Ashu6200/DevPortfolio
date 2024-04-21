"use client";
import React from "react";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "@/utils/Pin";
import { useTheme } from "next-themes";

const MapComponent = () => {
  const { theme } = useTheme();
  const initialViewState = {
    longitude: 78.8718,
    latitude: 21.7679,
    zoom: 1,
  };

  return (
    <div className='w-[50%] py-16 max-[480px]:py-[20px] max-[480px]:w-full max-[480px]:h-[600px] '>
      <h2 className='font-[600] text-[18px] my-1'>Where is selected Region?</h2>
      <Map
        mapboxAccessToken='pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g'
        initialViewState={initialViewState}
        className='w-full h-full'
        mapStyle={
          theme === "dark"
            ? "mapbox://styles/mapbox/dark-v9"
            : "mapbox://styles/mapbox/streets-v9"
        }
        scrollZoom={false}
        attributionControl={false}
        projection={"globe"}
      >
        <GeolocateControl position='top-left' />
        <NavigationControl position='top-left' />
        <Marker
          longitude={initialViewState.longitude}
          latitude={initialViewState.latitude}
          anchor='bottom'
        >
          <Pin />
        </Marker>
      </Map>
    </div>
  );
};

export default MapComponent;
