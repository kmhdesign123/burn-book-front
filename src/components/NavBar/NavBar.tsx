// npm modules
import { NavLink } from 'react-router-dom'

// assets
import logo from '../../assets/logo_lipstick.svg'


// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="Lipstick Print Logo" />
      </NavLink>
      {user ?
        <ul>
          <li><NavLink to="/profiles">The Burn Book</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Log out</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login">Login</NavLink></li>
          <li><NavLink to="/auth/signup">Sign-Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
