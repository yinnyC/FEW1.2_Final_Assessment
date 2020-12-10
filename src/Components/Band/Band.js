// /Components/Band/Band.js

import React from 'react'
import Like from '../Like/Like'
import './Band.css'
function Band(props) {
  const {band_name,fans,formed,origin,split,style} = props
  let isSplited;
  let styleList = style.split(',')
  const displayStyle = styleList.map((style) =>
  <li >
    {style}
  </li>
);

  if(split === '-'){
    isSplited=<Like key={band_name} min={0} startVal={0}/>
  }
  

  return (
    <div className="Band">
      <h1>{band_name}</h1>
      <p>
        <b> Origin</b>:{origin}  
        <b> Fans</b>:{(fans*1000).toLocaleString()} 
        <b> Formed</b>:{formed}
        <b> Split</b>:{split}
      </p>
      <p>{style}</p>
      {displayStyle}
      {isSplited}
    </div>   
  )
}

export default Band