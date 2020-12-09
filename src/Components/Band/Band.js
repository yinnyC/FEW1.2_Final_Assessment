// /Components/Band/Band.js

import React from 'react'

function Band(props) {
  const {band_name,formed,origin,fans} = props
  return (
    <div className="Band">
      <h4>{band_name}</h4>
      <p>
        <b> Origin</b>:{origin}  
        <b> Fans</b>:{fans} 
        <b> Formed</b>:{formed}
      </p>
      
    </div>
    
  )
}

export default Band