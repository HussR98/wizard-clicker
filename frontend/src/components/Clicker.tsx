import flameImg from '../assets/blue-flame-px.png';
import { ClickerProps } from '../types';


const Clicker = ({ onClick, label }: ClickerProps) => {
    return <button className="card clicker" onClick={onClick}><img className="flame" src={flameImg} />{label}</button>;
}

export default Clicker;