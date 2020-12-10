// /Components/Band/Band.js

import React from 'react'
import Like from '../Like/Like'
import './Band.css'
function Band(props) {
  const {band_name,formed,origin,fans} = props
  return (
    <div className="Band">
      <h1>{band_name}</h1>
      <p>
        <b> Origin</b>:{origin}  
        <b> Fans</b>:{fans} 
        <b> Formed</b>:{formed}
      </p>
      <Like
      key={band_name}
      min={0} 
      startVal={0}
      />
    </div>
    
  )
}

export default Band