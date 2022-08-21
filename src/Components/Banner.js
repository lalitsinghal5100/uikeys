import React from 'react'
import { Fillbtn } from './Part/Fillbtn'
import { MovingBox } from './Part/MovingBox'
import { WatchBtn } from './Part/WatchBtn'

export const Banner = () => {
    return (
        <>
            <section className='mainBanner'>
                <div className="container flex justConSpBetween">
                    <div className="content flex flexDirCol justConCenter">
                        <h1 className='white'>Where <span className='yellow'>Teams Build </span> <br /> Faster, Together.</h1>
                        <p className='white'>Proactively coordinate quality quality vectors vis-a-vis supply chains. <br />
                            Quickly engage client-centric web services.</p>
                        <div className="buttons flex">
                            <Fillbtn Path="/" btnName="Latest Code Here" />
                            <WatchBtn />
                        </div>
                        <div className="priority">
                            <p>Top On Priority:</p>
                            <div className="logos">
                                <img src="./Assets/Img/reactlogo.png" alt="" />
                                <img src="./Assets/Img/vlogo.png" alt="" />
                                <img src="./Assets/Img/alogo.png" alt="" />
                                <img src="./Assets/Img/jslogo.png" alt="" />
                                <img src="./Assets/Img/htmllogo.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="./Assets/Img/BannerImg.png" alt="" />
                        <div className='movingBox1'>
                            <MovingBox imgpath="./Assets/Img/moovimg.png" heading="User Experience Class" text="Tomorrow is our" />
                        </div>
                        <div className='movingBox2'>
                            <MovingBox imgpath="./Assets/Img/moovimg.png" heading="User Experience Class" text="Tomorrow is our" />
                        </div>
                        <div className='movingBox3'>
                            <MovingBox imgpath="./Assets/Img/moovimg.png" heading="User Experience Class" text="Tomorrow is our" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
