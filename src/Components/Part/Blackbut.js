import React from 'react'

export const Blackbut = (prop) => {
  return (
    <>
    <a className='blackBut' href={prop.Path}>{prop.btnName}</a>
    </>
  )
}
