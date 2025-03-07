import React, {useEffect, useState, useRef} from 'react';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.scss";

export const DiveSiteMap = () => {

    const [lng] = useState(-97.7431);
    const [lat] = useState(30.2672);
    const [zoom] = useState(2);
    const mapContainerRef = useRef(null);
    const map = useRef(null)

    useEffect(() => {
        map.current = L.map(mapContainerRef?.current).setView([lat, lng], zoom);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
        }).addTo(map.current);
        return () => map.current.remove();
  }, [lat, lng, zoom]);

  return (
    <div className="map-container" ref={mapContainerRef}/>
  );
}