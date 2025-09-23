import { useState, useEffect } from "react";

export interface GameState {
    total: number;
    clickMultiplier: number;
    autoClicksPerSecond: number;
    upgradesPurchased: Record<string, boolean>;
}

//Custom hook for getting/setting current game state
export function useGameState(initialState?: Partial<GameState>) {
  // 1. Set up your state
  const [state, setState] = useState<GameState>({
    total: 0,
    clickMultiplier: 1,
    autoClicksPerSecond: 0,
    upgradesPurchased: {},
    ...initialState, // optional override when initializing
  });

  // 2. Add side effects (auto-clicker runs every second)
  useEffect(() => {
    const interval = setInterval(() => {
        if (state.autoClicksPerSecond > 0) {
            setState(prev => ({
            ...prev,
            total: prev.total + prev.autoClicksPerSecond,
            }));
        }
    }, 1000);

    // cleanup when component unmounts
    return () => clearInterval(interval);
  }, [state.autoClicksPerSecond]);

  // 3. Return state + updater
  return { state, setState };    
}
