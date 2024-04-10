import banner_img from '../../assets/magazine_banner.png';
import img6 from '../../assets/facebook.png';
import img5 from '../../assets/instagram.png';
import img4 from '../../assets/snapchat_icon.png';
import img3 from '../../assets/activities_img.jpg';
import img2 from '../../assets/sport_img.jpg';
import img1 from '../../assets/library.jpg'
import './home.css';


export default function Home() {
    return (
            <body>
                <section className="banner_section">
                    <img className="hero_image" src={banner_img}></img>
                    <h1 className="banner_hero">EDGE EXPRESS</h1>
                </section>

                <h2 className="general_info">Edge Hill News</h2>
                    <p className="general_text">
                        In 2022, Edge Hill University clinched the prestigious title of Modern University of the Year.
                        Renowned for its forward-thinking approach to education, Edge Hill stood out among its peers for 
                        its groundbreaking research, exceptional teaching standards, and dedication to student success. 
                        This recognition not only reaffirms Edge Hill's position as a leader in higher education but also underscores 
                        its ongoing efforts to provide students with an unparalleled educational experience supported by up-to-date facilities.
                    </p>
                <section className="home_content">
                    <a href='/campus'>
                        <img src={img1} className="library_image" alt="Image of a library"></img>
                        <p className='image_text'>View our Campus News!</p>
                    </a>
                    <a href='/sport'>
                        <img src={img2} className="football_image" alt="Image of a football game"></img>
                        <p className='image_text'>View our Sports News!</p>
                    </a>
                    <a href='/activities'>
                        <img src={img3} className="activity_image" alt="Image of a bowling ball"></img>
                        <p className='image_text'>View local Activities!</p>
                    </a>
                </section>
                <h3 className="social_title">Vist Our Social Media's!</h3>
                <section className="social_media">
                    <div className="social_links">
                        <a href="https://www.snapchat.com/">
                        <img src={img4} className="social_icon" alt="Image of the Snapchat icon"></img>
                        </a>

                        <a href="https://www.instagram.com/">
                        <img src={img5} className="social_icon" alt="Image of the Instagram Icon"></img>
                        </a>

                        <a href="https://www.facebook.com/">
                        <img src={img6} className="social_icon" alt="Image of the Facebook icon"></img>
                        </a>
                    </div>
                    <p className="social_description">Visit us on Social Media to keep up to date with all things Edge Hill.</p>
                </section>
            </body>
    )
}