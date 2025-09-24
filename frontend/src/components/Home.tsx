import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Clicker from './Clicker'
import UpgradePanel from './UpgradePanel'
import { upgrades } from '../utils/upgrades/upgrades'
import ShopPanel from './ShopPanel'
import { useGameStateContext } from "../hooks/GameStateContext";

function Home() {
  const { state, addClick } = useGameStateContext();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Clicker onClick={addClick} label={`count is ${state.total}`} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <UpgradePanel upgrades={upgrades} />
      </div>
      <div className="card">
        <ShopPanel />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </>
  )
}

export default Home
