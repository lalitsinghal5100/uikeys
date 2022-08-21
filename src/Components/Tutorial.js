import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BlackBtn } from './Part/BlackBtn';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Tutorial = () => {
    return (
        <>
            <section className='tutorial'>
                <div className='container'>
                    <h2 className='textAlincenter'>Centralized Knowledge <span className='blue'>for Every Team</span> <br /> and scale-up clients</h2>
                    <h4 className='textAlincenter'>CodePen is a <span className='font-w'>social development environment</span> for front-end <br />designers and developers.</h4>
                    <div className='tutorialBox'>
                        <Carousel responsive={responsive} className="cards">

                            <div className="card flex flexDirCol alinCenter">
                                <img src="./Assets/Img/rclogo.png" alt="" />
                                <h4 className='blue'>React</h4>
                                <p>We enhance and execute your
                                    vision with strategic planning and
                                    tactical implementation.</p>

                                <a className='explorelink' href='/'>Explore Topics</a>
                            </div>

                            <div className="card flex flexDirCol alinCenter">
                                <img src="./Assets/Img/vcode.png" alt="" />
                                <h4 className='blue'>React Code</h4>
                                <p>We enhance and execute your
                                    vision with strategic planning and
                                    tactical implementation.</p>

                                <a className='explorelink' href='/'>Explore Topics</a>
                            </div>

                            <div className="card flex flexDirCol alinCenter">
                                <img src="./Assets/Img/superherologo.png" alt="" />
                                <h4 className='blue'>Vue Code</h4>
                                <p>We enhance and execute your
                                    vision with strategic planning and
                                    tactical implementation.</p>

                                <a className='explorelink' href='/'>Explore Topics</a>
                            </div>

                            <div className="card flex flexDirCol alinCenter">
                                <img src="./Assets/Img/vcode.png" alt="" />
                                <h4 className='blue'>Tailwind</h4>
                                <p>We enhance and execute your
                                    vision with strategic planning and
                                    tactical implementation.</p>
                                <a className='explorelink' href='/'>Explore Topics</a>
                            </div>

                        </Carousel>
                        <BlackBtn btnName="Explore All" path="/" />
                    </div>
                </div>
            </section>
        </>
    )
}
