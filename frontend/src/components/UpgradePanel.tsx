import Upgrade from "../utils/upgrades/Upgrade";
import UpgradeButton from "./UpgradeButton";
import {type GameState} from "../hooks/useGameState";
import { useEffect } from "react";

interface UpgradePanelProps {
    upgrades: Upgrade[];
    state: GameState;
}

const UpgradePanel = ({ upgrades, state }: UpgradePanelProps) => {
    useEffect(() => {
    }, [state]
    )

    return (
        <div className="upgrade-panel">
            <h2>Upgrades</h2>
            {upgrades
                .filter((upgrade) => upgrade.isUnlocked(state))
                .map((upgrade) => (
                    <UpgradeButton key={upgrade.id} upgrade={upgrade} state={state} />
                ))}
        </div>
    );
}

export default UpgradePanel;
                
