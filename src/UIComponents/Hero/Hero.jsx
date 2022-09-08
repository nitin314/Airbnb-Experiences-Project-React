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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam quibusdam eius animi aspernatur beatae doloribus velit ut, quis temporibus impedit itaque dolorum eaque repellendus corrupti quia, magni, cumque sunt.</p>
            </section>
        </div>
    );
}