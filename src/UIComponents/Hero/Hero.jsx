import './Hero.css';
import image from './Hero-image.png';

export default function Hero(){
    return (
        <div className="hero-container">
            <section className="hero-image-container">
                <div className="hero-image">
                    <img src={image} alt="Hero"/>
                </div>
            </section>
            <section className='hero-Text-container'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </div>
    );
}