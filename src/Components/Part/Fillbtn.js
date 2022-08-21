import React from 'react'

export const Fillbtn = (prop) => {
  return (
    <>
    <a className='glBtn' href={prop.Path}>{prop.btnName}</a>
    </>
  )
}
