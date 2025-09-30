import type { GameState } from "../../types";
import type { UpgradeProps } from "../../types";

export default class Upgrade {
  id: string;
  name: string;
  description: string;
  cost: number;
  unlocked: (state: GameState) => boolean;
  effect: (state: GameState) => null;

  constructor({ id, name, description, cost, unlocked, effect }: UpgradeProps) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.unlocked = unlocked;
    this.effect = effect;
  }

  isUnlocked(state: GameState) {
    return state.upgradesUnlocked[this.id] === true;
  }
}
