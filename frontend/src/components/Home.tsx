import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Clicker from './Clicker'
import UpgradePanel from './UpgradePanel'
import { upgrades } from '../utils/upgrades/upgrades'
import ShopPanel from './ShopPanel'
import { useGameStateContext } from "../hooks/GameStateContext";
import Counter from './Counter'
import Crystal from './Crystal'
import { CrystalRef } from './Crystal';
import { useRef } from "react";

function Home() {
  const { state, addClick } = useGameStateContext();
  const crystalRef = useRef<CrystalRef>(null);
  const handleClick = () => {
    crystalRef.current?.triggerShake();
    addClick();
  }

  return (
    <>
      <div className="page-container">
        <h1 className="title">Wizard Clicker</h1>
        <Counter count={state.total.toString()} />
        <Crystal ref={crystalRef} />
        <Clicker onClick={handleClick} label={`CLICK`} />
        <UpgradePanel upgrades={upgrades} />
        <ShopPanel />
      </div>
    </>
  )
}

export default Home
