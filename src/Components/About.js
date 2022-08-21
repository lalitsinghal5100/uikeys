import React from 'react'
import { BlackBtn } from './Part/BlackBtn'
import { MovingBox } from './Part/MovingBox'


export const About = () => {
  return (
    <section className='about'>
      <img className='bodyimg' src="./Assets/Img/bodyimg.png" alt="" />
      <div className="container">
        <div className="content flex justConSpBetween">
          <div className='aboutImg'>
          <div className='movingBox4'>
            <MovingBox imgpath="./Assets/Img/moovimg.png" heading="User Experience Class" text="Tomorrow is our" />
        </div>
            <img src="./Assets/Img/aboutimg.png" alt="" />
            <p className='reviews'><span className='fstyle'>8,200+ </span> Fove Star Reviews</p>
          </div>
          <div className='aboutText'>
            <span className='orange-bg-text'>Who we are</span>
            <h2>Empowering The World To <span className='orange'>Develop Technology</span></h2>
            <p>CodePen is a <span className='font-w'> social development </span>environment for front-end
              designers and developers. Build and<span className='font-w'> deploy a website,</span> show
              off your work, <span className='font-w'> build test cases  </span>to learn and
              debug, and find inspiration.</p>
              <BlackBtn btnName="Explore All" path="/" />
          </div>
        </div>
        <div className="record">
          <div className="cards flex justConCenter">
            <div className="card">
              <h4>100+ Million</h4>
              <p>Monthly visitors to our
                network</p>
            </div>
            <div className="card">
              <h4>100+ Million</h4>
              <p>Monthly visitors to our
                network</p>
            </div>
            <div className="card">
              <h4>100+ Million</h4>
              <p>Monthly visitors to our
                network</p>
            </div>
            <div className="card">
              <h4>100+ Million</h4>
              <p>Monthly visitors to our
                network</p>
            </div>
            <div className="card">
              <h4>100+ Million</h4>
              <p>Monthly visitors to our
                network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
