// Import all images, libraries and stylesheets needed
import './sport.css';
import sport1 from '../../assets/sport_trophy.jpg';
import sport2 from '../../assets/knight.jpg';
import sport3 from '../../assets/club.jpg';
import sport4 from '../../assets/football.jpg';
import sport5 from '../../assets/american_football.jpg';
import sport6 from '../../assets/hockey.jpg';
import {useRef, useEffect, useState} from 'react';

// Allow the use of a read more button
const button_styles = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
}

export default function Sport(){

    // Used to check if each read ore button is in use or not
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    

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
                    <p className="sport1text" style={isOpen1 ? null : button_styles}>
                    In a season filled with ups and downs, the Edge Hill University football team embarked on a 
                    journey that would culminate in an unforgettable triumph. With the league title hanging in the balance, every match became a test of skill, strategy, and resilience. 
                    Led by their seasoned coach, who instilled a culture of discipline and determination, the players rallied together, forging bonds that would prove crucial in the face of adversity.
                   
                    </p>
                    {/* If is active, read less is displayed, if inactive read more is */}
                    <button className="read_more1" onClick={() => setIsOpen1(!isOpen1)}>{isOpen1 ? 'Read Less!' : 'Read More!'}</button>
                </div>
                <img src={sport2} className='sport2' alt="Two cartoon knights fighting"></img>
                {/* Contains the title and text for the sport story */}
                <div>
                    <h2 className='sport2title'>Varsity is Coming!</h2>
                    {/* Check if the read me button is in use or not */}
                    <p className='sport2text' style={isOpen2 ? null : button_styles}>
                        The rivalry between Edge Hill University and the University of Central Lancashire (UCLAN) was legendary, 
                        stretching back decades and spanning across various sports. As the annual Varsity event approached, 
                        anticipation hung thick in the air, with both universities gearing up for the ultimate showdown.
                        For the students and athletes at Edge Hill University, Varsity wasn't just another competition; it was a chance to assert 
                        their dominance and showcase their talent on a grand stage. Months of rigorous training and preparation had gone into every team, 
                        each member fueled by a burning desire to emerge victorious against their rivals from across the county.
                    </p>
                    {/* If is active, read less is displayed, if inactive read more is */}
                    <button className="read_more2" onClick={() => setIsOpen2(!isOpen2)}>{isOpen2 ? 'Read Less!' : 'Read More!'}</button>
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