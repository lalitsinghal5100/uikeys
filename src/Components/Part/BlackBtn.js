import React from 'react'

export const BlackBtn = (prop) => {
  return (
    <>
    <a className='blackBtn' href={prop.Path}>{prop.btnName}</a>
    </>
  )
}
