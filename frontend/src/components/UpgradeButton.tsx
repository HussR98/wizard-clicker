import Upgrade from "../utils/upgrades/Upgrade";
import { useGameStateContext } from "../hooks/GameStateContext";

interface UpgradeButtonProps {
  upgrade: Upgrade;
}

const UpgradeButton = ({ upgrade }: UpgradeButtonProps) => {
  const { state, buyUpgrade } = useGameStateContext();

  return (
    <div className="upgrade-item">
      <div className="upgrade-item-info">
        <span className="upgrade-item-name">{upgrade.name}</span>
        <div className="upgrade-item-desc-box">
          <span className="upgrade-item-desc">{upgrade.description}</span>
        </div>
        <span className="upgrade-item-cost">{upgrade.cost} crystals</span>
      </div>
      <button
        className="upgrade-button"
        disabled={upgrade.cost > state.total}
        onClick={() => buyUpgrade(upgrade.id)}
      >
        Buy
      </button>
    </div>
  );
};

export default UpgradeButton;