import './campus.css';
import story1 from '../../assets/su_building.jpg';
import story2 from '../../assets/trophy.jpg';
import story3 from '../../assets/goose_story.jpg';

export default function Campus(){
    return (
        <body className="campus_body">
            <h1 className="campus_header">Campus News!</h1>
            <section className="articles">
                <div className="story" >
                    <h2 className="story1title">New Student Union</h2>
                    <img src={story1} className="story1img"></img>
                    <p className="story1text">In the heart of Edge Hill University, a towering structure of steel and glass stands as a testament to the institution's commitment to fostering community and enhancing the student experience. After months of meticulous planning and construction, the new Student Union building is nearing completion, 
                    poised to become a vibrant hub for students from all walks of life.
                    </p>
                </div>
                <div className="story">
                    <h2 className="story2title">Modern University Again?</h2>
                    
                    <p className="story2text">Edge Hill University is on a mission to reclaim its title as the Modern University of the Year, driven by a relentless pursuit of innovation and excellence. 
                        With a commitment to pushing boundaries in teaching, research, and student support, the university is actively shaping the future of higher education. 
                        Embracing cutting-edge technology, fostering interdisciplinary collaboration, and prioritizing the student experience, 
                        Edge Hill is poised to once again stand at the forefront of modern education. 
                        </p>
                        <img src={story2} className="story2img"></img>
                </div>
                <div className="story">
                    <h2 className="story3title">Geese Taking Over!</h2>
                    <img src={story3} className="story3img"></img>
                    <p className="story3text">Canadian geese have become a nuisance for students at Edge Hill University,
                        creating a stir with their aggressive behavior on campus grounds. These feathered intruders, typically known for their graceful presence,
                        have taken to asserting dominance in certain areas, causing concern among students and faculty alike. 
                    </p>
                </div>
            </section>
        </body>
    )
}