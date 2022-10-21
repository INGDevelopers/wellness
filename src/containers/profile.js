

import '../components/styles/profile.css';
import ProfileImg from '../images/profile.jpg';



const Profile = () => {


  return(
    <div className="div-principal-profile">
      <div>
        <button>Atras</button>
      </div>
      <div>
        <idv className="profile-image">
          <img src={ProfileImg}/>
        </idv>
        <div className="profile-info">
          <h2>Andres Felipe Quintero Bautista</h2>
          <button>Editar</button>
        </div>
      </div>

      <div className='profile-info-data'>
        <div>
          <h4>Correo institucional</h4>
          <h5>andres.quinteroba@campusucc.edu.co</h5>
        </div>
        <div>
          <h4>N. Horas</h4>
          <h5>64</h5>
        </div>
      </div>

      <div className="">

      </div>
    </div>
  );

}

export default Profile;