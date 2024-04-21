import './sport2.css';
import sport2img from '../../../assets/knight.webp';

export default function Sport_news2(){
    return(
        <div>
            <section className='varsity_story'>
            <img src={sport2img} className='sport2img' alt="Two cartoon knights fighting" />
            <h1 className='sport2_title1'>VARSITY IS COMING!</h1>
            <div className='sport2_text_section'>
                <p className='sport2_text'>The rivalry between Edge Hill University and the University of Central Lancashire (UCLAN) was more than just a mere clash of academic institutions;
                    it was a saga woven into the very fabric of their shared sporting history. Stretching back through the annals of time, it had become a storied tradition, 
                    fueling passions and igniting fervor among students and athletes alike. As the date for the annual 
                    Varsity event loomed on the horizon, the air crackled with anticipation, signaling the impending showdown between these titans of collegiate sports.
                </p>
                <p className='sport2_text'>
                    In the end, victory belonged to Edge Hill University, their triumph resounding across the campus and beyond. But more than just a tally of wins and losses, 
                    Varsity was a celebration of the indomitable spirit, fierce determination, and unwavering camaraderie that defined the essence of collegiate sports. As the echoes of 
                    cheers and applause faded into the night, one thing was clear: the rivalry between 
                    Edge Hill University and UCLAN would endure, fueling the flames of competition and inspiring generations of athletes to strive for greatness.
                </p>
            </div>
            </section>
            <section>
                
            </section>
        </div>
    )
}