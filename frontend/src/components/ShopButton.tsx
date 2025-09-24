import { useGameStateContext } from "../hooks/GameStateContext";

interface ShopButtonProps {
  name: "Auto Clicker" | "Click Multiplier";
  cost: number;
}

const ShopButton = ({ name, cost }: ShopButtonProps) => {
  const { state, buyShopItem } = useGameStateContext();

  const value =
    name === "Auto Clicker" ? state.autoClicksPerSecond : state.clickMultiplier;

  return (
    <button
      className="shop-button"
      disabled={cost > state.total}
      onClick={() => buyShopItem(name, cost)}
    >
      {name} - currently {value} - {cost} crystals
    </button>
  );
};

export default ShopButton;
