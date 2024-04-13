import './activities.css';
import activities1 from '../../assets/pubgolf.jpg';
import pub1 from '../../assets/pub_list/pub1.jpg';
import pub2 from '../../assets/pub_list/pub2.jpg';
import pub3 from '../../assets/pub_list/pub3.jpg';
import pub4 from '../../assets/pub_list/pub4.jpg';
import pub5 from '../../assets/pub_list/pub5.jpg';
import pub6 from '../../assets/pub_list/pub6.jpg';
import pub7 from '../../assets/pub_list/pub7.jpg';
import pub8 from '../../assets/pub_list/pub8.jpg';
import pub9 from '../../assets/pub_list/pub9.jpg';


export default function Activities(){
    return (
        <body>
            <h1 className="activities_header">ACTIVITIES</h1>
            <section className="activities_banner">
                <h2 className="golf_title"> Pub Golf</h2>
                <img src={activities1} className="pub_golf_img"></img>
            </section>

            <h2 className="activities_instructions">Pubs and Holes</h2> 
            <section className="pub_list">
                <div className="pub_card">
                    <article className="pub_section">
                        <img src={pub1} className="pub_img" alt="Image of the front of a pub"></img>

                        <div className="pub_info">
                            <h3 className="pub_number">Pub 1</h3>
                            <p className="pub_name">The Rose & Crown</p>
                        </div>
                    </article>

                    <article className="pub_section">
                        <img src={pub2} className="pub_img" alt="Image of the front of a pub"></img>

                        <div className="pub_info">
                            <h3 className="pub_number">Pub 2</h3>
                            <p className="pub_name">The Horseshoe</p>
                        </div>
                    </article>

                    <article className="pub_section">
                        <img src={pub3} className="pub_img" alt="Image of the front of a pub"></img>

                        <div className="pub_info">
                            <h3 className="pub_number">Pub 3</h3>
                            <p className="pub_name">The Railway</p>
                        </div>
                    </article>

                    <article className="pub_section">
                        <img src={pub4} className="pub_img" alt="Image of the front of a pub"></img>

                        <div className="pub_info">
                            <h3 className="pub_number">Pub 4</h3>
                            <p className="pub_name">The Golden Lion</p>
                        </div>
                    </article>

                    <article className="pub_section">
                        <img src={pub5} className="pub_img" alt="Image of the front of a pub"></img>

                        <div className="pub_info">
                            <h3 className="pub_number">Pub 5</h3>
                            <p className="pub_name">Queens Head</p>
                        </div>
                    </article>

                    <article className="pub_section">
                        <img src={pub6} className="pub_img" alt="Image of the front of a pub"></img>

                        <div className="pub_info">
                            <h3 className="pub_number">Pub 6</h3>
                            <p className="pub_name">Styles Bar</p>
                        </div>
                    </article>

                    <article className="pub_section">
                        <img src={pub7} className="pub_img" alt="Image of the front of a pub"></img>

                        <div className="pub_info">
                            <h3 className="pub_number">Pub 7</h3>
                            <p className="pub_name">The Crickiters</p>
                        </div>
                    </article>

                    <article className="pub_section">
                        <img src={pub8} className="pub_img" alt="Image of the front of a pub"></img>

                        <div className="pub_info">
                            <h3 className="pub_number">Pub 8</h3>
                            <p className="pub_name">Liquid Bar</p>
                        </div>
                    </article>

                    <article className="pub_section">
                        <img src={pub9} className="pub_img" alt="Image of the front of a pub"></img>

                        <div className="pub_info">
                            <h3 className="pub_number">Pub 9</h3>
                            <p className="pub_name">The Court Leet</p>
                        </div>
                    </article>
                </div>
            </section>
        </body>
        
    )
}