interface CounterProps {
    count: string;
}

const Counter = ({ count }: CounterProps) => {
    return <div className="counter">{count}</div>;
}

export default Counter;