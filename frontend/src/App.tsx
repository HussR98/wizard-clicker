import './App.css'
import { GameStateProvider } from "./hooks/GameStateContext";
import Home from './components/Home'

function App() {

  return (
    <GameStateProvider>
      <Home />
    </GameStateProvider>
  )
}

export default App
