import './index.scss'
import { NavLink } from 'react-router-dom'
import headerImage from '../../assets/headerImage.png';

function BottomNavBar() {
 
  return (
    <div className="bottomNavBar">
        <div className='logo'>
            <img src={headerImage} alt="" />
            <p>Anime<span>App</span></p>
        </div>
        <div className='navBar'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/anime"}>Anime</NavLink>
            <NavLink to={"/manga"}>Manga</NavLink>
            <NavLink to={"/favorites"}>Favorites</NavLink>
            <NavLink to={"/about-us"}>About Us</NavLink>
        </div>
    </div>
  )
}

export default BottomNavBar;
