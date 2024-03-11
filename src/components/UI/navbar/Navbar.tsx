import { Link } from "react-router-dom"
import cl from './Navbar.module.scss';
import { MyButton } from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../store/AuthContext";
export const Navbar = () => {
  const { authorized, setAuhtorized } = useContext(AuthContext);

  return (
    <div className={cl.navbar}>
      <div>
        {authorized && <MyButton onClick={() => setAuhtorized(false)}>Logout</MyButton>}
      </div>

      <div className={cl.navbar__links}>
        <Link className={cl.navbar__link} to='./about'>About</Link>
        <Link className={cl.navbar__link} to='./posts'>Posts</Link>
      </div>
    </div>
  )
}