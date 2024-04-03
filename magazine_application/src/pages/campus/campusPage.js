import './campus.css';
import story1 from '../../assets/su_building.jpg';

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
                    <p>text</p>
                </div>
                <div className="story">
                    <h2 className="story3title">title</h2>
                    <p>text</p>
                </div>
            </section>
        </body>
    )
}