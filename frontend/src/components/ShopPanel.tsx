import ShopButton from "./ShopButton";
import { useGameStateContext } from "../hooks/GameStateContext";

const ShopPanel = () => {
  const { state } = useGameStateContext();

  return (
    <div className="shop-panel">
      {(state.autoClicksPerSecond > 0 || state.clickMultiplier > 1) && (
        <>
          <h2>Shop</h2>
          {state.autoClicksPerSecond > 0 && <ShopButton name="Auto Clicker" cost={10} />}
          {state.clickMultiplier > 1 && <ShopButton name="Click Multiplier" cost={50} />}
        </>
      )}
    </div>
  );
};

export default ShopPanel;
