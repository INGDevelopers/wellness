
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/nav.css';
import Iusers from '../icons/users.png';
import Istatics from '../icons/statistics.png';
import Iins from '../icons/instruments.png';
import Ireq from '../icons/requests.png';



import Foto from '../images/notFound.png'

export default function Nav() {

  const [url, setUrl] = useState();
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    navigate(e);
    setUrl(e);
  }

  return (
    <>
      <div id="sidemenu" class="menu-expanded">
        {/* <!-- Navbar o header --> */}
        <div id="header">
          <div id="title"><span>Verq</span></div>
          <div id="menu-btn">
            <div class="btn-menu"></div>
            <div class="btn-menu"></div>
            <div class="btn-menu"></div>
          </div>
        </div>
        {/* <!-- Profile --> */}
        <div id="profile">
          {/* <!-- Para ubicar la imagen del usuario  --> */}
          <div id="photo"><img src={Foto} alt="perfil" /></div>
          {/* <a id="name" href="/profile">editar perfil</a> */}
          {/* <div id="name"><span>Andres</span>&nbsp;<span>Quintero</span></div> */}
          <a id="name" class="" href="/">Inicio</a>
        </div>
        {/* <!-- items --> */}
        <div id="menu-items">
          <div class="item" id="dashboard">
            <a class="link" href="/admin">
              {/* <div class="icon"><img src="../../resources/img/icons8-dashboard-layout-material-outlined/icons8-dashboard-layout-48.png"/></div> */}
              <div class="title"><img src={Istatics} alt="img de usuarios" />Dashboard</div>
            </a>
          </div>
          <div class="item" id="users">
            <a class="link" onClick={() => handleNavigate('/admin/users')}>
              {/* <div class="icon"><img src="../../resources/img/icons8-carrete-de-película-material-outlined/icons8-carrete-de-película-48.png"/></div> */}
              <div class="title"><img src={Iusers} alt="img de usuarios" />Usuarios</div>
            </a>
          </div>
          <div class="item" id="instruments">
            <a class="link" onClick={() => handleNavigate('/admin/instruments')}>
              {/* <div class="icon"><img src="../../resources/img/icons8-comunicación-material-outlined/icons8-comunicación-48.png"/></div> */}
              <div class="title"><img src={Iins} alt="img de usuarios" />Instrumentos</div>
            </a>
          </div>
          <div class="item" id="instruments">
            <a class="link" onClick={() => handleNavigate('/admin/requests')}>
              {/* <div class="icon"><img src="../../resources/img/icons8-comunicación-material-outlined/icons8-comunicación-48.png"/></div> */}
              <div class="title"><img src={Ireq} alt="img de usuarios" />Solicitudes</div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}