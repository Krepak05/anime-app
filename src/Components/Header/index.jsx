import './index.scss'
import headerImage from '../../assets/headerImage.png';

function Header() {
 
  return (
    <>
   <header>
   <img src={headerImage} alt="" />
    <p>Anime<span>App</span></p>
   </header>
    </>
  )
}

export default Header
