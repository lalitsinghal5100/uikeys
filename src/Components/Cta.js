import React from 'react'
import { Blackbut } from './Part/Blackbut'

export const Cta = () => {
    return (
        <section className='cta'>
            <div className='container flex justConSpBetween alinCenter'>
                <div className='ctaText'>
                    <h2>Join <span className='blue'>Freepik’s creator</span> <br /> community</h2>
                    <h4>CodePen is a <span className='font-w'>social development environment</span> for front-end <br />
                        designers and developers. </h4>
                    <Blackbut btnName="Contact Us" path="/" />
                </div>
                <div className='ctaImg'>
                    <img className='cta1' src='./Assets/Img/boot1.png' alt='ctaimg' />
                    <img className='cta2' src='./Assets/Img/css1.png' alt='ctaimg' />
                    <img className='cta3' src='./Assets/Img/js1.png' alt='ctaimg' />
                    <img className='cta4' src='./Assets/Img/js2.png' alt='ctaimg' />
                    <img className='cta5' src='./Assets/Img/react1.png' alt='ctaimg' />
                    <img className='main-img' src='./Assets/Img/mainimg.png' alt='ctaimg' />
                </div>
            </div>
        </section >
    )
}
