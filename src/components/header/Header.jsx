import React from "react";

export const Header = ({ userLocation, getUserLocation }) => {
  const getCoords = () => {
    getUserLocation();
  };
  return (
    <div>
      <button onClick={getCoords}>Координаты</button>
      {userLocation.latitude}, {userLocation.longitude}
    </div>
  );
};
