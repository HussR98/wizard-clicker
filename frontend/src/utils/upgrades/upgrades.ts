import Upgrade from "./Upgrade";
import {type GameState} from "../../hooks/useGameState";

const autoClicker0 = new Upgrade(
    {
        id: "autoClicker0",
        name: "Auto-Condenser",
        description: "This novel device condenses ambient mana particles, automatically creating crystals",
        cost: 100,
        unlocked: (state:GameState)=>(state.total>=30),
        effect: ()=>null
    }
)

export const upgrades = [autoClicker0]