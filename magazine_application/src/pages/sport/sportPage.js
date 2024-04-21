// Import all images, libraries and stylesheets needed
import './sport.css';
import sport1 from '../../assets/sport_trophy.webp';
import sport2 from '../../assets/knight.webp';
import sport3 from '../../assets/club.webp';
import sport4 from '../../assets/football.webp';
import sport5 from '../../assets/american_football.webp';
import sport6 from '../../assets/hockey.webp';
import { Link } from 'react-router-dom';



export default function Sport(){

    return (
        
        <div className="sport_body">
            <h1 className="sport_header">Sport News</h1>
            {/* The sport articles contained within a section */}
            <section className="sport_articles">
                <img src={sport1} className="sport1" alt="Changing room with a football team celebrating a trophy"></img>
               {/* Contains the title and text for the sport story */}
                <div>
                    <h2 className='sport1title'>The Edge Clinche The Title!</h2>
                    {/* Check if the read me button is in use or not */}
                    {/* <p className="sport1text" style={isOpen1 ? null : button_styles}> */}
                    <p className="sport1text">
                    In a season teeming with anticipation and challenges, the Edge Hill University football team embarked on a journey ...
                   
                    </p>
                    <Link to="/sport/sport1">
                    <button className="read_more1">Read More...</button>
                    </Link>
                </div>
                <img src={sport2} className='sport2' alt="Two cartoon knights fighting"></img>
                {/* Contains the title and text for the sport story */}
                <div>
                    <h2 className='sport2title'>Varsity is Coming!</h2>
                    {/* Check if the read me button is in use or not */}
                    {/* <p className='sport2text' style={isOpen2 ? null : button_styles}> */}
                    <p className="sport2text">
                        The rivalry between Edge Hill University and the University of Central Lancashire (UCLAN) was legendary, 
                        stretching back decades and spanning across various sports. As the ...
                    </p>
                    {/* If is active, read less is displayed, if inactive read more is */}
                    <Link to="/sport/sport2">
                    <button className="read_more1">Read More...</button>
                    </Link>
                </div>
            </section>
            {/* Title and text discussing social nights at university */}
            <h1 className='society_header'>Society News</h1>
            <p className='society_text'>
            Wednesday social night at Alpine Night Club is an integral part of the social scene, 
            pulsating with energy and excitement that reverberates throughout the week. As the midweek beacon for nightlife enthusiasts, 
            this cherished tradition draws crowds eager to unwind, dance, and revel in the electric atmosphere.
            Dress up in themes, complete challanges and have a good time!
            </p>
            {/* Section containing 4 images */}
            <section className='society_news'>
                <img src={sport3} className="sport3" alt="Club dance floor"></img>
                <img src={sport4} className="sport4" alt="Football team drinking in a pub"></img>
                <img src={sport5} className="sport5" alt="American football team drinking in the pub"></img>
                <img src={sport6} className="sport6" alt="Hockey team drinking in the pub"></img>
            </section>
        </div>
    )
}