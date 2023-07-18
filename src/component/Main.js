import React from 'react'
import Images from './Image'


const Main = () => {
    return (
        <>
            <div className='container' >
                <div className='content'>
                    <h1>Experience your ultimate mobile application</h1>
                    <p>Get your blood tests delivered at let home collect sample from the
                        victory of the managements that supplies best design system guidelines ever.</p>
                    <div className='btn2'>
                        <button>Get Started</button>
                        <i class="fa-sharp fa-solid fa-play">Watch video</i>
                    </div>
                </div>
                <div className='image'>
                    <img src={Images.mobile} />
                </div>
            </div>
        </>
    )
}

export default Main
