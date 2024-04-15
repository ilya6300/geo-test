import { useState } from "react";

import "./style/App.css";
import { GeneralMap } from "./components/map/GeneralMap";
import { Header } from "./components/header/Header";

const App = () => {
  const [userLocation, setUserLocation] = useState(null);
  const getUserLocation = () => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(position.coords);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  getUserLocation();
  return (
    <div className="App">
      <Header userLocation={userLocation} getUserLocation={getUserLocation}/>
      {userLocation !== null ? <GeneralMap userLocation={userLocation}/> : <></>}
    </div>
  );
}

export default App;
