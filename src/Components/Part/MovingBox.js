import React from 'react'

export const MovingBox = (prop) => {
  return (
    <div className='animatePnl flex'>
    <div className='pnlImg'><img src={prop.imgpath} alt="" /></div>
    <div className='pnlContent'>
        <h5 className='pnlHead'>{prop.heading}</h5>
        <span className='pnlPera'>{prop.text}</span>
    </div>
    </div>
  )
}
