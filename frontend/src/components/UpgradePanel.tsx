import Upgrade from "../utils/upgrades/Upgrade";
import UpgradeButton from "./UpgradeButton";
import { useGameStateContext } from "../hooks/GameStateContext";

interface UpgradePanelProps {
  upgrades: Upgrade[];
}

const UpgradePanel = ({ upgrades }: UpgradePanelProps) => {
  const { state } = useGameStateContext();

  return (
    <div className="upgrade-panel">
      <h2>Upgrades</h2>
      {upgrades
        .filter(u => u.isUnlocked(state))
        .filter(u => !state.upgradesPurchased[u.id])
        .map(u => (
          <UpgradeButton key={u.id} upgrade={u} />
        ))}
    </div>
  );
};

export default UpgradePanel;
