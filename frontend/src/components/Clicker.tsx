interface ClickerProps {
    onClick: () => void;
    label: string;
}

let Clicker = ({ onClick, label }: ClickerProps) => {
    return <button onClick={onClick}>{label}</button>;
}

export default Clicker;