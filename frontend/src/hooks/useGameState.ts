import { useState, useEffect } from "react";
import type Upgrade from "../utils/upgrades/Upgrade";
import { upgrades } from "../utils/upgrades/upgrades";

export interface GameState {
  total: number;
  clickMultiplier: number;
  bonusClickMultiplier: number;
  autoClicksPerSecond: number;
  bonusAutoClickMultiplier: number;
  upgradesPurchased: Record<string, boolean>;
  upgradesUnlocked: Record<string, boolean>;
}

// Return type of hook
export interface UseGameStateReturn {
  state: GameState;
  addClick: () => void;
  buyUpgrade: (upgradeId: string) => void;
  buyShopItem: (
    item: "Auto Clicker" | "Click Multiplier",
    cost: number
  ) => void;
}

// Unlock logic
export function checkUnlocks(state: GameState, upgrades: Upgrade[]) {
  const newUnlocked = { ...state.upgradesUnlocked };

  for (const upgrade of upgrades) {
    if (!newUnlocked[upgrade.id] && upgrade.unlocked(state)) {
      newUnlocked[upgrade.id] = true;
    }
  }

  return { ...state, upgradesUnlocked: newUnlocked };
}

// Upgrade purchase (immutable)
export function purchaseUpgrade(prev: GameState, upgradeId: string): GameState {
  const upgrade = upgrades.find((u) => u.id === upgradeId);
  if (!upgrade || prev.total < upgrade.cost) return prev;

  const newState: GameState = {
    ...prev,
    total: prev.total - upgrade.cost,
    upgradesPurchased: { ...prev.upgradesPurchased, [upgradeId]: true },
  };

  upgrade.effect(newState);

  return newState;
}

// Shop item purchase (immutable)
export function purchaseShopItem(
  prev: GameState,
  item: "Auto Clicker" | "Click Multiplier",
  cost: number
): GameState {
  if (prev.total < cost) return prev;

  const newState: GameState = {
    ...prev,
    total: prev.total - cost,
    autoClicksPerSecond: prev.autoClicksPerSecond,
    clickMultiplier: prev.clickMultiplier,
  };

  if (item === "Auto Clicker") newState.autoClicksPerSecond += 1;
  if (item === "Click Multiplier") newState.clickMultiplier += 1;

  return newState;
}

// Custom hook
export function useGameState(
  initialState?: Partial<GameState>
): UseGameStateReturn {
  const defaultUpgrades = upgrades.reduce((acc, u) => {
    acc[u.id] = false;
    return acc;
  }, {} as Record<string, boolean>);

  const [state, setState] = useState<GameState>({
    total: 0,
    clickMultiplier: 1,
    bonusClickMultiplier: 1,
    autoClicksPerSecond: 0,
    bonusAutoClickMultiplier: 1,
    upgradesPurchased: defaultUpgrades,
    upgradesUnlocked: defaultUpgrades,
    ...initialState,
  });

  // Helper to always apply checkUnlocks
  function safeSetState(updater: (prev: GameState) => GameState) {
    setState((prev) => checkUnlocks(updater(prev), upgrades));
  }

  // Auto-click interval
  useEffect(() => {
    const interval = setInterval(() => {
      safeSetState((prev) => ({
        ...prev,
        total: prev.total + prev.autoClicksPerSecond,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Actions
  function addClick() {
    safeSetState((prev) => ({
      ...prev,
      total: prev.total + prev.clickMultiplier * prev.bonusClickMultiplier,
    }));
  }

  function buyUpgrade(upgradeId: string) {
    safeSetState((prev) => purchaseUpgrade(prev, upgradeId));
  }

  function buyShopItemAction(
    item: "Auto Clicker" | "Click Multiplier",
    cost: number
  ) {
    safeSetState((prev) => purchaseShopItem(prev, item, cost));
  }

  return { state, addClick, buyUpgrade, buyShopItem: buyShopItemAction };
}
