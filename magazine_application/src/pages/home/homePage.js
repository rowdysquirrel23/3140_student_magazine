import banner_img from '../../assets/magazine_banner.png';
import './home.css';


export default function Home() {
    return (
          
            <section className="banner_section">
                <img className="hero_image" src={banner_img}></img>
                <h1 className="banner_hero">EDGE EXPRESS</h1>
            </section>
    )
}