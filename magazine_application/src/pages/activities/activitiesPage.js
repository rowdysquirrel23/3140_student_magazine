// Import stylesheet and images
import './activities.css';
import activities1 from '../../assets/pubgolf.webp';
import pub1 from '../../assets/pub_list/pub1.webp';
import pub2 from '../../assets/pub_list/pub2.webp';
import pub3 from '../../assets/pub_list/pub3.webp';
import pub4 from '../../assets/pub_list/pub4.webp';
import pub5 from '../../assets/pub_list/pub5.webp';
import pub6 from '../../assets/pub_list/pub6.webp';
import pub7 from '../../assets/pub_list/pub7.webp';
import pub8 from '../../assets/pub_list/pub8.webp';
import pub9 from '../../assets/pub_list/pub9.webp';


export default function Activities(){
    return (
        <div>
            <h1 className="activities_header">ACTIVITIES</h1>
            {/* Image with text overlay */}
            <section className="activities_banner">
                <h2 className="golf_title"> Pub Golf</h2>
                <img src={activities1} className="pub_golf_img"></img>
            </section>

            <h2 className="activities_instructions">Pubs and Holes</h2> 
            {/* Section for the cards of pubs */}
            <section className="pub_list">
                
                <div className="pub_card">
                    {/* a pub card, image and text description */}
                    <article className="pub_section">
                        <img src={pub1} className="pub_img" alt="Image of the front of a pub"></img>
                        <div className="pub_info">
                            <h3 className="pub_number">Pub 1</h3>
                            <p className="pub_name">The Rose & Crown</p>
                        </div>
                    </article>
                    {/* a pub card, image and text description */}
                    <article className="pub_section">
                        <img src={pub2} className="pub_img" alt="Image of the front of a pub"></img>
                        <div className="pub_info">
                            <h3 className="pub_number">Pub 2</h3>
                            <p className="pub_name">The Horseshoe</p>
                        </div>
                    </article>
                    {/* a pub card, image and text description */}
                    <article className="pub_section">
                        <img src={pub3} className="pub_img" alt="Image of the front of a pub"></img>
                        <div className="pub_info">
                            <h3 className="pub_number">Pub 3</h3>
                            <p className="pub_name">The Railway</p>
                        </div>
                    </article>
                    {/* a pub card, image and text description */}
                    <article className="pub_section">
                        <img src={pub4} className="pub_img" alt="Image of the front of a pub"></img>
                        <div className="pub_info">
                            <h3 className="pub_number">Pub 4</h3>
                            <p className="pub_name">The Golden Lion</p>
                        </div>
                    </article>
                    {/* a pub card, image and text description */}
                    <article className="pub_section">
                        <img src={pub5} className="pub_img" alt="Image of the front of a pub"></img>
                        <div className="pub_info">
                            <h3 className="pub_number">Pub 5</h3>
                            <p className="pub_name">Queens Head</p>
                        </div>
                    </article>
                    {/* a pub card, image and text description */}
                    <article className="pub_section">
                        <img src={pub6} className="pub_img" alt="Image of the front of a pub"></img>
                        <div className="pub_info">
                            <h3 className="pub_number">Pub 6</h3>
                            <p className="pub_name">Styles Bar</p>
                        </div>
                    </article>
                    {/* a pub card, image and text description */}
                    <article className="pub_section">
                        <img src={pub7} className="pub_img" alt="Image of the front of a pub"></img>
                        <div className="pub_info">
                            <h3 className="pub_number">Pub 7</h3>
                            <p className="pub_name">The Crickiters</p>
                        </div>
                    </article>
                    {/* a pub card, image and text description */}
                    <article className="pub_section">
                        <img src={pub8} className="pub_img" alt="Image of the front of a pub"></img>
                        <div className="pub_info">
                            <h3 className="pub_number">Pub 8</h3>
                            <p className="pub_name">Liquid Bar</p>
                        </div>
                    </article>
                    {/* a pub card, image and text description */}
                    <article className="pub_section">
                        <img src={pub9} className="pub_img" alt="Image of the front of a pub"></img>
                        <div className="pub_info">
                            <h3 className="pub_number">Pub 9</h3>
                            <p className="pub_name">The Court Leet</p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
        
    )
}