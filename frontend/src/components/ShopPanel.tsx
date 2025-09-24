import {type GameState} from "../hooks/useGameState";
import { useEffect } from "react";
import ShopButton from "./ShopButton";

interface ShopPanelProps {
    state: GameState;
}

const ShopPanel = ({ state }: ShopPanelProps) => {
    useEffect(() => {
    }, [state]
    )

    return (
        <div className="shop-panel">
            {
                (state.autoClicksPerSecond || state.clickMultiplier > 1) &&
                (
                    <>
                        <h2>Shop</h2>
                        {state.autoClicksPerSecond > 0 && <ShopButton name="Auto Clicker" value={state.autoClicksPerSecond} cost={10} total={state.total} />}
                        {state.clickMultiplier > 1 && <ShopButton name="Click Multiplier" value={state.clickMultiplier} cost={50} total={state.total} />}
                    </>
                )
            }
        </div>
    );
}

export default ShopPanel;
