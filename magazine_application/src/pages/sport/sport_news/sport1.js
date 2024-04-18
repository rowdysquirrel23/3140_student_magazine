import './sport1.css';
import sport1img from '../../../assets/sport_trophy.jpg';

export default function Sport_news1(){
    return(
        <div>
            <section className="football_story">
                <h1 className="news1_title">The Edge Clinch The Title!</h1>
                <img src={sport1img} className="sport1" alt="Changing room with a football team celebrating a trophy"></img>
                <p className="news1_text1">    
                In a season teeming with anticipation and challenges, the Edge Hill University football team embarked on a journey destined to etch 
                itself into the annals of sporting greatness. 
                As the league title hung tantalizingly within reach, each match evolved into a crucible of skill, strategy, and unwavering resolve. 
                Under the astute guidance of their seasoned coach, whose leadership fostered a culture of discipline and unyielding determination, the 
                team honed their talents and fortified their 
                spirits for the battles ahead.   
                </p>
                <p className='news1_text2'>
                In the pivotal moments that defined their season, it was not just skill and strategy that propelled them forward, but the unshakeable belief 
                in themselves and each other—a belief that transcended the confines of the pitch and ignited a flame of determination that could not be extinguished. 
                And when the final whistle blew, and victory was theirs, 
                it was not just a triumph on the scoreboard but a testament to the power of teamwork, resilience, and the unbreakable spirit of the Edge Hill University 
                football team.
                </p>
            </section>
            <section>
                
            </section>
        </div>
    )
}