import { CounterProps } from '../types';

const Counter = ({ count }: CounterProps) => {
    return <div className="counter">{count} Crystals</div>;
}

export default Counter;