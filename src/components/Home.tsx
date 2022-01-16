import "./home.styles.css";
import "../App.css";
import { useEffect, useState } from "react";
import { Main } from "./main/Main";
import { Upgrades } from "./upgrades/Upgrades";
import sky from "./main/images/sky.jpg";

export const Home = () => {
  const [velocity, setVelocity] = useState(1);
  const [currentSpeedInMs, setCurrentSpeedInMs] = useState(1);
  const [distanceFromEarthInKm, setDistanceFromEarthInKm] = useState(10000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeedInMs(currentSpeedInMs * velocity);
      setDistanceFromEarthInKm(distanceFromEarthInKm + currentSpeedInMs / 1000);
    }, 100);

    return () => clearInterval(interval);
  }, [currentSpeedInMs, distanceFromEarthInKm, velocity]);

  return (
    <div className="container">
      <div className="main" style={{ backgroundImage: `url(${sky})` }}>
        <Main
          currentSpeedInMs={currentSpeedInMs}
          distanceFromEarthInKm={distanceFromEarthInKm}
          velocity={velocity}
        />
      </div>
      <div className="upgrades">
        <Upgrades />
      </div>
    </div>
  );
};
