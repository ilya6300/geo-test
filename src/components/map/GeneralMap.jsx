import React, { useEffect } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const GeneralMap = ({ userLocation }) => {
  useEffect(() => {
    console.log(userLocation);
  }, []);
  //Яндекс карты
  return (
    <YMaps>
      <div>
        <Map
          style={{ width: "100vw", height: "100vh" }}
          type="yandex#hybrid"
          defaultState={{ center: [userLocation.latitude, userLocation.longitude], zoom: 20, controls: [] }}>
          <Placemark geometry={ [userLocation.latitude, userLocation.longitude] } />
        </Map>
      </div>
    </YMaps>
  );
};
