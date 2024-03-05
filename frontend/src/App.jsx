import './App.css'
import { Route,Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import NavBar from './components/navBar'
import Fetchcomponents from './Pages/Fetchcomponents'
import Wishlist from './Pages/Wishlist'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<><NavBar/><Landing/>
    <Fetchcomponents/></>}/>
      <Route path='/wishlist' element={<><NavBar/><Wishlist/></>}/>
    </Routes>
    </>
  )
}

export default App
