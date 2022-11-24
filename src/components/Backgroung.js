import './styles/Background.css';
import basket from '../icons/basket.png';
import futbol from '../icons/futbol.png';
import guitarra from '../icons/guitarra.png';
import raqueta from '../icons/raqueta.png';
import volley from '../icons/volley.png';


const Backgroung = () => {
    return (
        <div className='main-container'>
            <div className='top-left'>
                <img id='basket' src={basket} alt="basket img" />
                <img id='futbol' src={futbol} alt="futbol img" />
                <img id='guitarra' src={guitarra} alt="guitarra img" />
                <img id='raqueta' src={raqueta} alt="raqueta img" />
                <img id='volley' src={volley} alt="volley img" />
            </div>
            <div className='top-right'>
                <img id='basket' src={basket} alt="basket img" />
                <img id='futbol' src={futbol} alt="futbol img" />
                <img id='guitarra' src={guitarra} alt="guitarra img" />
                <img id='raqueta' src={raqueta} alt="raqueta img" />
                <img id='volley' src={volley} alt="volley img" />
            </div>
            <div className='bottom-left'>
                <img id='basket' src={basket} alt="basket img" />
                <img id='futbol' src={futbol} alt="futbol img" />
                <img id='guitarra' src={guitarra} alt="guitarra img" />
                <img id='raqueta' src={raqueta} alt="raqueta img" />
                <img id='volley' src={volley} alt="volley img" />
            </div>
            <div className='bottom-right'>
                <img id='basket' src={basket} alt="basket img" />
                <img id='futbol' src={futbol} alt="futbol img" />
                <img id='guitarra' src={guitarra} alt="guitarra img" />
                <img id='raqueta' src={raqueta} alt="raqueta img" />
                <img id='volley' src={volley} alt="volley img" />
            </div>
        </div>
    )
}

export default Backgroung