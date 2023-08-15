import './App.scss'
import { Route,Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import Header from './Components/Header'
import AnimePage from './Pages/Anime'
import Footer from './Components/Footer'
import AboutUsPage from './Pages/AboutUs'
import FavoritesPage from './Pages/Favorites'
import MangaPage from './Pages/Manga'
import SideBar from './Components/Sidebar'
import BottomNavBar from './Components/BottomNavBar'
function App() {

  return (
    <>
    <Header />
      <div className="main">
      <div className='middle'>
        <SideBar/>
        <div className="main-content">
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/anime' element={<AnimePage/>}/>
            <Route path='/manga' element={<MangaPage/>}/>
            <Route path='/favorites' element={<FavoritesPage/>}/>
            <Route path='/about-us' element={<AboutUsPage/>}/>
            </Routes>
            <BottomNavBar />
          <Footer/>
        </div>      
      </div>
    </div>
    </>
   
   
  )
}

export default App
