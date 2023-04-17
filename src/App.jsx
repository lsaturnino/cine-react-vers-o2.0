import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'

import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
