import ShopButton from "./ShopButton";
import { useGameStateContext } from "../hooks/GameStateContext";

const ShopPanel = () => {
  const { state } = useGameStateContext();
  let autoClickCost = 10 * Math.round(Math.pow(1.25, state.autoClicksPerSecond + 1));
  let clickMultiplierCost = 50 * Math.round(Math.pow(1.25, state.clickMultiplier));

  return (
    <div className="shop-panel">
      {(state.autoClicksPerSecond > 0 || state.clickMultiplier > 1) && (
        <>
          <h2>Shop</h2>
          {state.autoClicksPerSecond > 0 && <ShopButton name="Auto Clicker" cost={autoClickCost} />}
          {state.clickMultiplier > 1 && <ShopButton name="Click Multiplier" cost={clickMultiplierCost} />}
        </>
      )}
    </div>
  );
};

export default ShopPanel;
