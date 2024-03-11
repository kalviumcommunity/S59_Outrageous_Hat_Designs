import './App.css'
import { Route,Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import NavBar from './components/navBar'
import Fetchcomponents from './Pages/Fetchcomponents'
import Wishlist from './Pages/Wishlist'
import Customisable from './Pages/Customisable';
import ImageGallery from './components/ImageGallery'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<><NavBar/><Landing/>
      <Fetchcomponents/></>}/>
      <Route path='/wishlist' element={<><NavBar/><Wishlist/></>}/>
      <Route path='/custom' element={<><NavBar/><ImageGallery/><Customisable/></>}/>
      <Route path='/signUp'element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
