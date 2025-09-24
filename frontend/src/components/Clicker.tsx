interface ClickerProps {
    onClick: () => void;
    label: string;
}

const Clicker = ({ onClick, label }: ClickerProps) => {
    return <button className="clicker" onClick={onClick}>{label}</button>;
}

export default Clicker;