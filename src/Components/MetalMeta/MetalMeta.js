// /Components/MetalMeta/MetalMeta.js

import React from 'react'
import data from '../../metal.json'

function MetalMeta() {
  const numOfBand = data.length
 
  return (
    <div className="Heading">
      <h3>Metal Bands 🤘</h3>
      <p>Bands: {numOfBand}</p>
    </div>
    
  )
}

export default MetalMeta