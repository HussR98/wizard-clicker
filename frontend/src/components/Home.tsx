import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Clicker from './Clicker'
import UpgradePanel from './UpgradePanel'
import { upgrades } from '../utils/upgrades/upgrades'
import ShopPanel from './ShopPanel'
import { useGameStateContext } from "../hooks/GameStateContext";
import Counter from './Counter'
import Crystal from './Crystal'

function Home() {
  const { state, addClick } = useGameStateContext();

  return (
    <>
      <div className="page-container">
        <h1 className="title">Wizard Clicker</h1>
        <Counter count={state.total.toString()} />
        <Crystal />
        <Clicker onClick={addClick} label={`CLICK`} />
        <UpgradePanel upgrades={upgrades} />
        <ShopPanel />
      </div>
    </>
  )
}

export default Home
