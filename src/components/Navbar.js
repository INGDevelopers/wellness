import { useNavigate, useLocation } from 'react-router-dom';
import './styles/navBar.css';
import ToggleBar from './ToggleBar';
import FotoProfile from '../images/notFound.png';
import { useState } from 'react';

const NavBar = () => {

  const pathName = useLocation();
  const navigate = useNavigate();
  const [Toggle, setToggle] = useState(false);

  // console.log(pathName.pathname)
  const rol = sessionStorage.getItem('rol');

  const logout = () => {
    if (sessionStorage.getItem('token')) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('rol');
      navigate('/login');
    }
  }

  return (
    <nav id="menu">

      {/* <!-- start menu --> */}

      <ul>
        <li id="Navmvl">
          <ToggleBar onClick={() => setToggle(!Toggle)} />
          <ul show={Toggle}>
            {/* {console.log(Toggle)} */}
            <li>
              {
                pathName.pathname !== '/profile' ?
                  <a href="profile" id="profile">
                    {/* Para ubicar la imagen del usuarios */}
                    <div id="photo"><img src={FotoProfile} alt="perfil" /></div>

                  </a>
                  : <a>Menu</a>

              }
            </li>
            {
              rol === 'admin' ?
                <li><a href="/admin">Config</a></li>
                : null
            }
            <li><a onClick={logout}>Salir</a></li>
          </ul>

        </li>

        <li id="Navpc">
          {
            pathName.pathname !== '/profile' ?
              <a href="profile" id="profile">
                {/* Para ubicar la imagen del usuarios */}
                <div id="photo"><img src={FotoProfile} alt="perfil" /></div>

              </a>
              : <a>Menu</a>
          }

          {/* <!-- start menu desplegable --> */}
          <ul>
            {
              rol === 'admin' ?
                <li><a href="/admin">Config</a></li>
                : null
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