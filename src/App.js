import './App.css'
import './style/text.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/home'
import kontaktPage from './pages/kontakt/kontakt'
import { HeaderPage } from './pages/header/header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/kontaks'} element={<kontaktPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
