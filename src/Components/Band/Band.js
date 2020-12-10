// /Components/Band/Band.js

import React from 'react'
import Like from '../Like/Like'
import './Band.css'
function Band(props) {
  const {band_name,fans,formed,origin,split,style} = props
  let isSplited;
  if(split === '-'){
    isSplited=<Like
    key={band_name}
    min={0} 
    startVal={0}
    />
  }
  return (
    <div className="Band">
      <h1>{band_name}</h1>
      <p>
        <b> Origin</b>:{origin}  
        <b> Fans</b>:{fans} 
        <b> Formed</b>:{formed}
        <b> Style</b>:{style}
      </p>
      {isSplited}
    </div>
    
  )
}

export default Band