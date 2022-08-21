import React from 'react'

export const TextBtn = (prop) => {
  return (
    <>
    <a className='textBtn' href={prop.Path}>{prop.btnName}</a>
    </>
  )
}
