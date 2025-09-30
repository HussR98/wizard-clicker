import Upgrade from "./utils/upgrades/Upgrade";

export interface ClickerProps {
  onClick: () => void;
  label: string;
}

export interface CounterProps {
  count: string;
}

export interface CrystalRef {
  triggerShake: () => void;
}

export interface ShopButtonProps {
  name: "Auto Clicker" | "Click Multiplier";
  cost: number;
}

export interface UpgradeButtonProps {
  upgrade: Upgrade;
}

export interface UpgradePanelProps {
  upgrades: Upgrade[];
}

export interface GameState {
  total: number;
  clickMultiplier: number;
  bonusClickMultiplier: number;
  autoClicksPerSecond: number;
  bonusAutoClickMultiplier: number;
  upgradesPurchased: Record<string, boolean>;
  upgradesUnlocked: Record<string, boolean>;
}

export interface UseGameStateReturn {
  state: GameState;
  addClick: () => void;
  buyUpgrade: (upgradeId: string) => void;
  buyShopItem: (
    item: "Auto Clicker" | "Click Multiplier",
    cost: number
  ) => void;
}

export interface UpgradeProps {
  id: string;
  name: string;
  description: string;
  cost: number;
  unlocked: (state: GameState) => boolean;
  effect: (state: GameState) => null;
}
