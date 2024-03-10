import { Link } from "react-router-dom"
import cl from './Navbar.module.scss';
export const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <Link className={cl.navbar__link} to='./about'>About</Link>
      <Link className={cl.navbar__link} to='./posts'>Posts</Link>
    </div>
  )
}