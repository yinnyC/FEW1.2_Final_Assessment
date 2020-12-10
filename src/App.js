import './App.css';
import Heading from './Components/Heading/Heading'
import MetalMeta from './Components/MetalMeta/MetalMeta'
import Array from './metal.json'
import Band from './Components/Band/Band'

function App() {
  const BandList = Array.map(({band_name,fans,formed,origin,split,style})=>{
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
      <Heading />
      <MetalMeta />
      <div className="BandList">
        {BandList}
      </div>
      
    </div>
  );
}

export default App;
