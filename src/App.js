import './App.css';
import React, { useState } from 'react'
import Heading from './Components/Heading/Heading'
import MetalMeta from './Components/MetalMeta/MetalMeta'
import Array from './metal.json'
import Band from './Components/Band/Band'

function App() {
  const [ query, setQuery ] = useState('')
  const BandList = Array.filter((obj) => {
    // true if query is in band name
    const inBandName= obj.band_name.toLowerCase().includes(query.toLowerCase())
    return inBandName
  }).map(({band_name,fans,formed,origin,split,style})=>{
    return(
      <Band 
      key={band_name}
      band_name={band_name}
      fans={fans}
      formed={formed}
      origin={origin}
      split={split}
      style={style}
      />
    )
  })
  return (
    <div className="App">
      <header>
        <Heading />
        <MetalMeta />
        <form>
        <label> Search
        <input 
                  value={query}
                  placeholder="band name"
                  onChange={(e) => setQuery(e.target.value)} // Full-Control Element
              />
              </label>
        </form>
      </header>
      <div className="BandList">
        {BandList}
      </div>
      
    </div>
  );
}

export default App;
