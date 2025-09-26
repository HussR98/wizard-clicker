interface CounterProps {
    count: string;
}

const Counter = ({ count }: CounterProps) => {
    return <div className="counter">{count} Crystals</div>;
}

export default Counter;