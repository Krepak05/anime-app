import './index.scss'
import { NavLink } from 'react-router-dom'

function SideBar() {
 
  return (
    <div className="sidebar">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/anime"}>Anime</NavLink>
      <NavLink to={"/manga"}>Manga</NavLink>
      <NavLink to={"/favorites"}>Favorites</NavLink>
      <NavLink to={"/about-us"}>About Us</NavLink>
    </div>
  )
}

export default SideBar
