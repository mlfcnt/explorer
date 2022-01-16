import { distanceToTheMoonInKm } from "../../constants/distances";
import { Distance } from "../../models/Distance";
import { GraphicalProgress } from "../graphical-progress/GraphicalProgress";

type Props = {
  currentSpeedInMs: number;
  distanceFromEarthInKm: number;
  velocity: number;
};

export const Main = ({
  currentSpeedInMs,
  distanceFromEarthInKm,
  velocity,
}: Props) => {
  const distanceFormEarth = new Distance(distanceFromEarthInKm)
    .formattedDistance;
  const distanceToMoon = new Distance(
    distanceToTheMoonInKm - distanceFromEarthInKm
  ).formattedDistance;

  const calculateProgressInPercent = () => {
    return new Distance(distanceToMoon / distanceFormEarth / 100)
      .formattedDistance;
  };

  return (
    <div>
      <h1>Objectif : Atteindre la Lune</h1>
      <h3>
        Vitesse du vaisseau : {Math.round(currentSpeedInMs * 100) / 100} m/s
      </h3>
      <h5>Vélocité : {velocity}</h5>

      <div style={{ marginTop: "30vh" }}>
        <GraphicalProgress />
      </div>
      <h3>
        Distance parcourue : {distanceFormEarth} / {distanceToMoon} km (
        {calculateProgressInPercent()} %)
      </h3>
    </div>
  );
};
