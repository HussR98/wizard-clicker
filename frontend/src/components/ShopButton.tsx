import { useGameStateContext } from "../hooks/GameStateContext";
import { ShopButtonProps } from "../types";

const ShopButton = ({ name, cost }: ShopButtonProps) => {
  const { state, buyShopItem } = useGameStateContext();

  const value =
    name === "Auto Clicker" ? state.autoClicksPerSecond : state.clickMultiplier;

  return (
    <div className="shop-item">
      <div className="shop-item-info">
        <span className="shop-item-name">{name}</span>
        <span className="shop-item-value">Level: {value}</span>
        <span className="shop-item-cost">{cost} crystals</span>
      </div>
      <button
        className="shop-button"
        disabled={cost > state.total}
        onClick={() => buyShopItem(name, cost)}
      >
        Buy
      </button>
    </div>
  );
};

export default ShopButton;