// /Components/MetalMeta/MetalMeta.js

import React from 'react'
import data from '../../metal.json'
import Band from './Band'

function MetalMeta() {
  const numOfBand = data.length
  const BandList = data.map(({band_name,formed,origin,fans})=>{
    return(
      <Band 
      band_name={band_name}
      formed={formed}
      origin={origin}
      fans={fans}/>
    )
  })
  return (
    <div className="Heading">
      <h3>Metal Bands 🤘</h3>
      <p>Bands: {numOfBand}</p>
      {BandList}
    </div>
    
  )
}

export default MetalMeta