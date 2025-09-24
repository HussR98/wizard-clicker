import Upgrade from "../utils/upgrades/Upgrade";
import { useGameStateContext } from "../hooks/GameStateContext";

interface UpgradeButtonProps {
  upgrade: Upgrade;
}

const UpgradeButton = ({ upgrade }: UpgradeButtonProps) => {
  const { state, buyUpgrade } = useGameStateContext();

  return (
    <button
      className="upgrade-button"
      disabled={upgrade.cost > state.total}
      onClick={() => buyUpgrade(upgrade.id)}
    >
      {upgrade.name} - {upgrade.description} - {upgrade.cost} crystals
    </button>
  );
};

export default UpgradeButton;
