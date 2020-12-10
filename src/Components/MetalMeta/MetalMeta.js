// /Components/MetalMeta/MetalMeta.js

import React from 'react'
import data from '../../metal.json'

function MetalMeta() {
  const numOfBand = data.length
  const uniqueStyle = []
  const lookup = {}
  let totalFan = 0
  data.forEach(
    (data)=>{
      totalFan+= (data.fans*1000)
      const style = data.style.split(',')
      style.forEach((style)=>{
        if(!(style in lookup)){
          lookup[style]=1
          uniqueStyle.push(style)
        }
      })
    }
  )
  console.log(uniqueStyle)
  return (
    <div className="Heading">
      <p>Metal Bands 🤘</p>
      <p>Bands: {numOfBand}</p>
      <p>Styles: {uniqueStyle.length}</p>
      <p>Total Fans: {totalFan.toLocaleString()}</p>
    </div>
    
  )
}

export default MetalMeta