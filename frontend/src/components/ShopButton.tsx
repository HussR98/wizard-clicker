
interface ShopButtonProps {
    name: string;
    value: number;
    cost: number;
    total: number;
}

const ShopButton = ({ name, value, cost, total }: ShopButtonProps) => {
    return <button className="shop-button" disabled={cost > total}>{name} - currently {value} - {cost} crystals</button>;
}

export default ShopButton;