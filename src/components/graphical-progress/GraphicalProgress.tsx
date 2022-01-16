import "./graphicalProgress.styles.css";
import earth from "./images/earth.png";
import moon from "./images/moon.png";
import balloon from "./images/balloon.png";

export const GraphicalProgress = () => {
  return (
    <div className="graphicalProgress">
      <div className="earth">
        <img src={earth} alt="earth" />
      </div>
      <div className="progress">
        <div>
          <img id="balloon" src={balloon} alt="moon" />
        </div>
      </div>
      <div className="moon">
        <img src={moon} alt="moon" />
      </div>
    </div>
  );
};
