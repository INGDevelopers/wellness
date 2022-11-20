import { useNavigate, useLocation} from 'react-router-dom';
import './styles/navBar.css';

import FotoProfile from '../images/notFound.png';

const NavBar = () => {

  const pathName = useLocation();
  const navigate = useNavigate();

  // console.log(pathName.pathname)
  const rol = sessionStorage.getItem('rol');

  const logout = () => {
    if(sessionStorage.getItem('token')){
      sessionStorage.removeItem('token');
      navigate('/login');
    }
  }

  return(
    <nav id="menu">
      {/* <!-- start menu --> */}
      <ul>
        <li>
          {
            pathName.pathname !== '/profile'?
              <a href="profile" id="profile">
                {/* Para ubicar la imagen del usuarios */}
                  <div id="photo"><img src={FotoProfile} alt="perfil"/></div>
              </a>
            :<a>Menu</a>
          }
            
          {/* <!-- start menu desplegable --> */}
          <ul>
            {
              rol === 'admin'?
                <li><a href="/admin">Config</a></li>
              :null
            }
            <li><a onClick={logout}>Salir</a></li>
          </ul>
          {/* <!-- end menu desplegable --> */}
        </li>
      </ul>
      {/* <!-- end menu --> */}
    </nav>
      // <!-- end nav -->
  );
}

export default NavBar;