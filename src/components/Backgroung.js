import './styles/Background.css';
import topleft from '../images/1.png';
import topright from '../images/2.png';
import bottomleft from '../images/3.png';
import bottomright from '../images/4.png';

const Backgroung = () => {
    return (
        <div className='main-container'>
            <div className='top-left'>
                <img id='topleft' src={topleft} alt="basket img" />

            </div>
            <div className='top-right'>
                <img id='topright' src={topright} alt="basket img" />

            </div>
            <div className='bottom-left'>
                <img id='bottomleft' src={bottomleft} alt="basket img" />

            </div>
            <div className='bottom-right'>
                <img id='bottomright' src={bottomright} alt="basket img" />


            </div>
        </div>
    )
}

export default Backgroung