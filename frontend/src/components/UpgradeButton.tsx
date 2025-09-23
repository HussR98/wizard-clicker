import Upgrade from "../utils/upgrades/Upgrade";
import {type GameState} from "../hooks/useGameState";

interface UpgradeButtonProps {
    upgrade: Upgrade;
    state: GameState;
}

const UpgradeButton = ({ upgrade, state }: UpgradeButtonProps) => {
    return <button className="upgrade-button" disabled={upgrade.unlocked(state)}>{upgrade.name} - {upgrade.description} - {upgrade.cost} crystals</button>;
}

export default UpgradeButton;