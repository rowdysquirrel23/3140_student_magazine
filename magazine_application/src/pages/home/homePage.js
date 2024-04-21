// import banner_img from '../../assets/magazine_banner.png';
import banner2 from '../../assets/campus_banner.webp';
import img6 from '../../assets/facebook.webp';
import img5 from '../../assets/instagram.webp';
import img4 from '../../assets/snapchat_icon.webp';
import img3 from '../../assets/activities_img.webp';
import img2 from '../../assets/sport_img.webp';
import img1 from '../../assets/library.webp'
import sport1 from '../../assets/sport_trophy.webp';
import sport2 from '../../assets/knight.webp';
import story1 from '../../assets/su_building.webp';
import story3 from '../../assets/goose_story.webp';
import './home.css';
import {Link, useEffect, useState} from 'react-router-dom';


export default function Home() {


    return (
        // div to contain the whole page content
            <div className='home_body'>
                {/* This section contains the banner image and hero text that is placed on top of it */}
                <section className="banner_section">
                    <div className='banner_grid1'>
                            <img className="hero_image" src={banner2}></img>
                            <h1 className="banner_hero">EDGE EXPRESS</h1>
                    </div>
                    <div className='banner_grid2'>
                        <h2 className='banner_2title'>LATEST NEWS</h2>
                            <Link to="/sport/sport1" className='recent_story1'>
                                <img src={sport1} className="recent1" alt="Changing room with a football team celebrating a trophy"></img>
                                <p className='news_text'>The Edge Clinch The Title!</p>
                            </Link>
                        
                        
                            <Link to="/sport/sport2" className='recent_story2'>
                                <img src={sport2} className='recent2' alt="Two cartoon knights fighting"></img>
                                <p className='news_text'>Varsity is Coming!</p>
                            </Link>
                            <Link to="/campus" className='recent_story3'>
                                <img src={story1} className='recent3' alt="Two cartoon knights fighting"></img>
                                <p className='news_text'>New Student Union!</p>
                            </Link>
                            <Link to="/campus" className='recent_story4'>
                                <img src={story3} className='recent4' alt="Two cartoon knights fighting"></img>
                                <p className='news_text'>Geese Taking Over!</p>
                            </Link>
                    </div>
                </section>
                {/* General title and text about Edge Hill University */}
                <h2 className="general_info">Edge Hill News</h2>
                    <p className="general_text">
                        In 2022, Edge Hill University clinched the prestigious title of Modern University of the Year.
                        Renowned for its forward-thinking approach to education, Edge Hill stood out among its peers for 
                        its groundbreaking research, exceptional teaching standards, and dedication to student success. 
                        This recognition not only reaffirms Edge Hill's position as a leader in higher education but also underscores 
                        its ongoing efforts to provide students with an unparalleled educational experience supported by up-to-date facilities.
                    </p>
                {/* This section contains image links to the rest of the site, the home page is used as a 'contents' page you would see in a magazine  */}
                <section className="home_content">
                    {/* A tag to allow both the text and image to be used as a link */}
                    <a href='/campus'>
                        <img src={img1} className="library_image" alt="a library"></img>
                        <p className='image_text'>View our Campus News!</p>
                    </a>
                    <a href='/sport'>
                        <img src={img2} className="football_image" alt="a football game"></img>
                        <p className='image_text'>View our Sports News!</p>
                    </a>
                    <a href='/activities'>
                        <img src={img3} className="activity_image" alt="a bowling ball"></img>
                        <p className='image_text'>View local Activities!</p>
                    </a>
                </section>
                {/* Section to promote the websites social media pages */}
                <h3 className="social_title">Vist Our Social Media's!</h3>
                <section className="social_media">
                    <div className="social_links">
                        {/* Users can click the icon to be taken to the socil media */}
                        <a href="https://www.snapchat.com/">
                        <img src={img4} className="social_icon" alt="the Snapchat icon"></img>
                        </a>

                        <a href="https://www.instagram.com/">
                        <img src={img5} className="social_icon" alt="the Instagram Icon"></img>
                        </a>

                        <a href="https://www.facebook.com/">
                        <img src={img6} className="social_icon" alt="the Facebook icon"></img>
                        </a>
                    </div>
                    {/* small text description encouraging users to visit social media */}
                    <p className="social_description">Visit us on Social Media to keep up to date with all things Edge Hill.</p>
                </section>
            </div>
    )
}