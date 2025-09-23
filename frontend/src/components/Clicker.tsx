interface ClickerProps {
    onClick: () => void;
    label: string;
}

let Clicker = ({ onClick, label }: ClickerProps) => {
    return <button className="clicker" onClick={onClick}>{label}</button>;
}

export default Clicker;