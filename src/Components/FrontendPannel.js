import React from 'react';
import { useEffect } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

export const FrontendPannel = () => {
  useEffect(() => {
    opcl(0);
  }, []);

  const opcl = (flag) => {
    const acropara = document.querySelectorAll('.acor p');
    const acor = document.querySelectorAll('.acor');
    const pannelArrow = document.querySelectorAll('.pannelArrow svg');
    const pannelImg = document.querySelectorAll('.pannelImg');
    for(let i = 0;i < acropara.length; i++){
      acropara[i].style.display = "none";
    }
    for(let i = 0;i < pannelArrow.length; i++){
      pannelArrow[i].style.transform = "rotate(0deg)";
    }
    for(let i = 0;i < pannelImg.length; i++){
      pannelImg[i].classList.remove("showImg")
    }
    for(let i = 0;i < acor.length; i++){
      acor[i].classList.remove("backGray")
    }
    acor[flag].classList.add("backGray");
    acropara[flag].style.display = "block";
    pannelImg[flag].classList.add("showImg");
    pannelArrow[flag].style.transform = "rotate(90deg)";
  }
  
  return (
    
    <div className="frontendPannel">
      <div className="container">
        <div className="heading">
          <h2 className='textAlincenter'>A front-end environment made for<br /> testing and sharing</h2>
          <h4><span className='sky'>Explore the Editor</span></h4>
        </div>

          <div className="content flex">
            <div className="acordian">
                <div className="acor"> 
                  <h3 onClick={() => opcl(0)}><span className='pannelArrow'><AiFillCaretRight /></span> Support For the Way You Code</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe in soluta iure, rem, corrupti id porro sit quidem tenetur ipsam magni ipsum est autem minus, fuga vitae cumque distinctio.</p>
                </div>
                <div className="acor">
                  <h3 onClick={() => opcl(1)}><span className='pannelArrow'><AiFillCaretRight /></span> Support For the Way You Code</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe in soluta iure, rem, corrupti id porro sit quidem tenetur ipsam magni ipsum est autem minus, fuga vitae cumque distinctio.</p>
                </div>
                <div className="acor">
                  <h3 onClick={() => opcl(2)}><span className='pannelArrow'><AiFillCaretRight /></span> Support For the Way You Code</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe in soluta iure, rem, corrupti id porro sit quidem tenetur ipsam magni ipsum est autem minus, fuga vitae cumque distinctio.</p>
                </div>
                <div className="acor">
                  <h3 onClick={() => opcl(3)}><span className='pannelArrow'><AiFillCaretRight /></span> Support For the Way You Code</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe in soluta iure, rem, corrupti id porro sit quidem tenetur ipsam magni ipsum est autem minus, fuga vitae cumque distinctio.</p>
                </div>
                
            </div>
            <div className="imagePannel">
                <img className='pannelImg' src="./Assets/Img/mainimage.png" alt="" />
                <img className='pannelImg' src="./Assets/Img/mainimage.png" alt="" />
                <img className='pannelImg' src="./Assets/Img/mainimage.png" alt="" />
                <img className='pannelImg' src="./Assets/Img/mainimage.png" alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}
