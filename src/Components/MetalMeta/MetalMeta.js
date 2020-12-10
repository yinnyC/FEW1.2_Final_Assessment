// /Components/MetalMeta/MetalMeta.js

import React from 'react'
import data from '../../metal.json'

function MetalMeta() {
  const numOfBand = data.length
  const uniqueStyle = []
  const lookup = {}
  data.forEach(
    (data)=>{
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
    </div>
    
  )
}

export default MetalMeta