import "./upgrades.styles.css";

export const Upgrades = () => {
  return (
    <div className="upgrades">
      <h4>Améliorations</h4>
      {
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <p>Boost temporaire</p>
            <button>Souffler très fort | Vélocité + 1</button>
          </div>
          <div>
            <p>Améliorations permanentes</p>
            <button>Rajouter un moteur : +1000m/s</button>
          </div>
        </div>
      }
    </div>
  );
};
