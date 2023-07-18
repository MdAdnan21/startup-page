import React from 'react'
import Images from './Image'

const Navigation = () => {
    return (
        <>
            <div id='navbar'>
           
                <div id='logo'>
                    <img src={Images.header} />
                    <h3>Startup Landing</h3>
                </div>
                <nav className='list'>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Category</li>
                    <li>Pricing</li>
                </ul>

                </nav>
                <div className='btn'>
                <button>Get Started</button>
                </div>
               
            </div>

            
        
        </>
    )
}

export default Navigation
