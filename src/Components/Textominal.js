// import 'aos';
import React, { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import "aos/dist/aos.css";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Textominal = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <>
            <div className="textominal">
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg1' src="./Assets/Img/timg1.png" alt="" />
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg2' src="./Assets/Img/timg2.png" alt="" />
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg3' src="./Assets/Img/timg3.png" alt="" />
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg4' src="./Assets/Img/timg4.png" alt="" />
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg5' src="./Assets/Img/timg5.png" alt="" />
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg6' src="./Assets/Img/timg6.png" alt="" />
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg7' src="./Assets/Img/timg1.png" alt="" />
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg8' src="./Assets/Img/timg2.png" alt="" />
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg9' src="./Assets/Img/timg3.png" alt="" />
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg10' src="./Assets/Img/timg4.png" alt="" />
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg11' src="./Assets/Img/timg5.png" alt="" />
                <img data-aos-duration="3000" data-aos="zoom-in" className='timg12' src="./Assets/Img/timg6.png" alt="" />
                <div className="container">
                    <div className="heading">
                        <h2 className='textAlincenter'>Centralized Knowledge <span className='blue'>User testimoni</span> <br /> and scale-up clients</h2>
                        <h4>CodePen is a <span className='font-w'>social development environment</span> for front-end <br />
                            designers and developers. </h4>
                    </div>
                    <Carousel
                        showDots={true}
                        infinite={true}
                        responsive={responsive}
                        arrows={false}
                        className="textmon">
                        <div className="monial">
                            <span className='quotFirst'><FaQuoteLeft /></span>
                            <div className="star textAlincenter">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <div className="words textAlincenter">
                                <p>Appropriately disintermediate one-to-one vortals through cross functional infomediaries. Collaboratively pursue multidisciplinary systems through stand-alone architectures. Progressively transition covalent
                                    architectures whereas vertical applications
                                    procrastinate professional.</p>
                                <p className='blue'>Alexandro Oddol</p>
                            </div>
                            <span className='quoteSecond'><FaQuoteRight /></span>
                        </div>
                        <div className="monial">
                            <span className='quotFirst'><FaQuoteLeft /></span>
                            <div className="star textAlincenter">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <div className="words textAlincenter">
                                <p>Appropriately disintermediate one-to-one vortals through cross functional infomediaries. Collaboratively pursue multidisciplinary systems through stand-alone architectures. Progressively transition covalent
                                    architectures whereas vertical applications
                                    procrastinate professional.</p>
                                <p className='blue'><strong>Alexandro Oddol</strong></p>
                            </div>
                            <span className='quoteSecond'><FaQuoteRight /></span>
                        </div>
                        <div className="monial">
                            <span className='quotFirst'><FaQuoteLeft /></span>
                            <div className="star textAlincenter">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <div className="words textAlincenter">
                                <p>Appropriately disintermediate one-to-one vortals through cross functional infomediaries. Collaboratively pursue multidisciplinary systems through stand-alone architectures. Progressively transition covalent
                                    architectures whereas vertical applications
                                    procrastinate professional.</p>
                                <p className='blue'><strong>Alexandro Oddol</strong></p>
                            </div>
                            <span className='quoteSecond'><FaQuoteRight /></span>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Textominal