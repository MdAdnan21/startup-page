import React from 'react'
import Images from './Image'

const Features = () => {
  return (
    <>
      <p id='para'>QUALITY FEATURES</p>
      <h2 id='meet'>Meet exciting feature of app</h2>
      <div id='combine'>
        <div id='content1'>
        <img src={Images.web} />
          <h3>Vector Editing</h3>
          <p id='1'>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
        </div>

        <div id='content2'>
        <img src={Images.webapp} />
          <h3>Customize & Monitoring</h3>
          <p id='2'>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
        </div>
        <div id='content3'>
        <img src={Images.logo} />

          <h3>Quality & Short-period</h3>
          <p id='3'>Get your blood tests delivered at home collect a sample from the your blood tests.</p>

        </div>

      </div>
    </>
  )
}

export default Features
