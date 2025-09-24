import { useState, useEffect } from "react";
import type Upgrade from "../utils/upgrades/Upgrade";
import { upgrades } from "../utils/upgrades/upgrades";

export interface GameState {
    total: number;
    clickMultiplier: number;
    autoClicksPerSecond: number;
    upgradesPurchased: Record<string, boolean>;
    upgradesUnlocked: Record<string, boolean>;
}

export function checkUnlocks(state: GameState, upgrades: Upgrade[]) {
    const newUnlocked = {...state.upgradesUnlocked};

    for (const upgrade of upgrades) {
        if (!newUnlocked[upgrade.id] && upgrade.unlocked(state)) {
            newUnlocked[upgrade.id] = true;
        }
    }

    return {...state, upgradesUnlocked: newUnlocked}
}

export function purchaseUpgrade(state: GameState, upgradeId: string) {
    state.upgradesPurchased[upgradeId] = true;
    return {...state, upgradesPurchased: {...state.upgradesPurchased}};
}

//Custom hook for getting/setting current game state
export function useGameState(initialState?: Partial<GameState>) {

    const default_upgrades = upgrades.reduce((acc, upgrade) => {
        acc[upgrade.id] = false;
        return acc;
    }, {} as Record<string, boolean>);

    // 1. Initialize state
    const [state, setState] = useState<GameState>({
    total: 0,
    clickMultiplier: 1,
    autoClicksPerSecond: 0,
    upgradesPurchased: default_upgrades,
    upgradesUnlocked: default_upgrades,
    ...initialState, // optional override when initializing
    });

    // 2. Side effects
    useEffect(() => {
    const interval = setInterval(() => {
        setState(prev => {
            const unlockedState = checkUnlocks(prev, upgrades);
            return {
                ...unlockedState,
                total: prev.total + prev.autoClicksPerSecond,
            };
        });
    }, 2000);

    // cleanup when component unmounts
    return () => clearInterval(interval);
    }, [state.autoClicksPerSecond]);

    // 3. Return state + updater
    return { state, setState };    
}
