import Upgrade from "./Upgrade";
import type { GameState } from "../../types";

const autoClicker0 = new Upgrade({
  id: "autoClicker0",
  name: "Auto-Condenser",
  description:
    "This novel device condenses ambient mana particles, automatically creating crystals",
  cost: 50,
  unlocked: (state: GameState) => state.total >= 50,
  effect: (state: GameState) => {
    state.autoClicksPerSecond += 1;
    return null;
  },
});

const bonusAutoMult0 = new Upgrade({
  id: "bonusAutoMult0",
  name: "Efficient Condenser",
  description:
    "Improvements to the condenser design allow it to condense mana more efficiently, granting a 10x bonus to your auto clickers",
  cost: 500,
  unlocked: (state: GameState) => state.total >= 300,
  effect: (state: GameState) => {
    state.bonusAutoClickMultiplier *= 10;
    return null;
  },
});

const clickMult0 = new Upgrade({
  id: "clickMult0",
  name: "Ancient Runes",
  description:
    "By inscribing runes onto your wand, you can channel more mana with each wave, granting an additional crystal per click",
  cost: 50,
  unlocked: (state: GameState) => state.total >= 30,
  effect: (state: GameState) => {
    state.clickMultiplier += 1;
    return null;
  },
});

const bonusClickMult0 = new Upgrade({
  id: "bonusClickMult0",
  name: "Modern Runes",
  description:
    "Modern manufacturing techniques allow for far more precision than that crummy ancient stuff, granting a 10x bonus to your click power",
  cost: 500,
  unlocked: (state: GameState) => state.total >= 300,
  effect: (state: GameState) => {
    state.bonusClickMultiplier *= 10;
    return null;
  },
});

export const upgrades = [
  autoClicker0,
  bonusAutoMult0,
  clickMult0,
  bonusClickMult0,
];
