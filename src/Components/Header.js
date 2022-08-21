import React from 'react';
import { Fillbtn } from './Part/Fillbtn';
import { Navation } from './Part/Navation';


window.onscroll = () => {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = "#061553";
} else {
    document.getElementById("header").style.background = "transparent";
  }
}

export const Header = (prop) => {
  return (
    <section className='header' id='header'>
        <div className="container flex justConSpBetween alinCenter">
            <div className="logo">
                <img src="./Assets/Img/Logo.png" alt="" />
            </div>
            <div className="nav">
                <Navation  />
            </div>
            <div className="btn">
                <Fillbtn Path="/" btnName="Latest Code"/>
            </div>
        </div>
    </section>
  )
}
