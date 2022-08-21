import React from 'react';
import { blog } from '../Data/Data';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { Border } from './Part/Border';
import { TextBtn } from './Part/TextBtn';

export const OurBlog = () => {
    return (
        <section className='ourblog'>
                    <img className='bodyimg2' src="./Assets/Img/bodyimg2.png" alt="" />
                    <img className='bodyimg3' src="./Assets/Img/bodyimg3.png" alt="" />
            <div className="container">
                <div className="heading">
                    <h2 className='textAlincenter'>Centralized Knowledge <span className='blue'>Our Blog</span> <br /> and scale-up clients</h2>
                    <h4>CodePen is a social development environment for front-end <br />
                        designers and developers. </h4>
                </div>
                <ul className='topic'>
                    {blog.map((curEle) => {
                        return (
                            <li key={curEle.id}>
                                <div className='firstTopic'>
                                    <div className="img">
                                    <img src="./Assets/Img/courseimg.jpg" alt="" />
                                    <div className="content">
                                        <div className="upercont flex justConSpBetween alinCenter">
                                            <div className="socal ">
                                                <FaFacebookF />
                                                <AiOutlineTwitter />
                                                <ImLinkedin2 />
                                            </div>
                                            <div className="coll">
                                            <TextBtn Path="/" btnName="Collect" />
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='textContent'>
                                        <div className='topicText'>
                                            <div className="text-left"><span className='bestSaller'>Bestseller</span></div>
                                            <div className="text-right"><Border Path="/" borderBtn="Code" />
                                            <Border Path="/" borderBtn="UX Design" />
                                              </div>
                                        </div>
                                        <div className="content">
                                            <a className='textHrf' href='/'>{curEle.Title}</a>
                                        </div>
                                        <div className="read_more textAlinRight">
                                            <a className='readmore' href="/">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
}
