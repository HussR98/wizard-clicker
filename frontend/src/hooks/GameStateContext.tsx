import { createContext, useContext } from "react";
import type { UseGameStateReturn } from "../types";
import { useGameState } from "./useGameState";

const GameStateContext = createContext<UseGameStateReturn | null>(null);

export const GameStateProvider = ({ children }: { children: React.ReactNode }) => {
  const gameState = useGameState();
  return <GameStateContext.Provider value={gameState}>{children}</GameStateContext.Provider>;
};

export const useGameStateContext = () => {
  const context = useContext(GameStateContext);
  if (!context) throw new Error("useGameStateContext must be used inside a GameStateProvider");
  return context;
};
