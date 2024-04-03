import './sport.css';
import sport1 from '../../assets/sport_trophy.jpg';
import sport2 from '../../assets/knight.jpg';
import {useRef, useEffect, useState} from 'react';


const button_styles = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
}

export default function Sport(){

    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)

    return (
        <body className="sport_body">
            <h1 className="sport_header">Sport News</h1>
            <section className="sport_articles">
                <img src={sport1} className="sport1" alt="Changing room with a football team celebrating a trophy"></img>
               
                <div>
                    <h2 className='sport1title'>The Edge Clinche The Title!</h2>
                    <p className="sport1text" style={isOpen1 ? null : button_styles}>
                    In a season filled with ups and downs, the Edge Hill University football team embarked on a 
                    journey that would culminate in an unforgettable triumph. With the league title hanging in the balance, every match became a test of skill, strategy, and resilience. 
                    Led by their seasoned coach, who instilled a culture of discipline and determination, the players rallied together, forging bonds that would prove crucial in the face of adversity.
                   
                    </p>
                    <button className="read_more1" onClick={() => setIsOpen1(!isOpen1)}>{isOpen1 ? 'Read Less!' : 'Read More!'}</button>
                </div>
                <img src={sport2} className='sport2' alt="Two cartoon knights fighting"></img>
                <div>
                    <h2 className='sport2title'>Varsity is Among Us!</h2>
                    <p className='sport2text' style={isOpen2 ? null : button_styles}>
                        The rivalry between Edge Hill University and the University of Central Lancashire (UCLAN) was legendary, 
                        stretching back decades and spanning across various sports. As the annual Varsity event approached, 
                        anticipation hung thick in the air, with both universities gearing up for the ultimate showdown.
                        For the students and athletes at Edge Hill University, Varsity wasn't just another competition; it was a chance to assert 
                        their dominance and showcase their talent on a grand stage. Months of rigorous training and preparation had gone into every team, 
                        each member fueled by a burning desire to emerge victorious against their rivals from across the county.
                    </p>
                    <button className="read_more2" onClick={() => setIsOpen2(!isOpen2)}>{isOpen2 ? 'Read Less!' : 'Read More!'}</button>
                </div>
            </section>
        </body>
    )
}