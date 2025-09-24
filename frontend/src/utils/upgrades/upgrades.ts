import Upgrade from "./Upgrade";
import { GameState } from "../../hooks/useGameState";

const autoClicker0 = new Upgrade({
  id: "autoClicker0",
  name: "Auto-Condenser",
  description:
    "This novel device condenses ambient mana particles, automatically creating crystals",
  cost: 50,
  unlocked: (state: GameState) => state.total >= 30,
  effect: (state: GameState) => {
    state.autoClicksPerSecond += 1;
    return null;
  },
});

export const upgrades = [autoClicker0];
