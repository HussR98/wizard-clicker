import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicker from './components/Clicker'
import { useGameState } from './hooks/useGameState'
import UpgradePanel from './components/UpgradePanel'
import { upgrades } from './utils/upgrades/upgrades'
import ShopPanel from './components/ShopPanel'

function App() {
  const {state, setState} = useGameState();
  const handleClick = () => {
    setState(prev => ({
      ...prev,
      total: prev.total + prev.clickMultiplier,
    }));
  }

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
        <Clicker onClick={handleClick} label={`count is ${state.total}`} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <UpgradePanel upgrades={upgrades} state={state} />
      </div>
      <div className="card">
        <ShopPanel state={state} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
