import {useLocation} from 'react-router-dom';
import './styles/nav.css';

import FotoProfile from '../images/profile.jpg';

const NavBar = () => {

  const pathName = useLocation();
  // console.log(pathName.pathname)

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
            {/* <li><a href="/profile">Perfil</a></li> */}
            <li><a href="#">Salir</a></li>
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