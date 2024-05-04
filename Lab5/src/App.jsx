import { useState } from 'react'
import { UserProvider } from './context/EmojiContext'
import { LoginProvider } from './context/LoginContext'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emojis from './components/Emojis'  
import BitcoinRates from './components/BitcoinRates'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'
// object storing comment data - passed as props

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     
      {/* render the component, passing object data as props */}
      <UserProvider>
        <LoginProvider>
          <NavBar/>
          <AppRoutes/>
        </LoginProvider>
      </UserProvider>
      
    </>
  )
}

export default App
