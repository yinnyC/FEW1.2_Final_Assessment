import './App.css';
import Heading from './Components/Heading/Heading'
import MetalMeta from './Components/MetalMeta/MetalMeta'
import Array from './metal.json'
import Band from './Components/Band/Band'

function App() {
  const BandList = Array.map(({band_name,formed,origin,fans})=>{
    return(
      <Band 
      key={band_name}
      band_name={band_name}
      formed={formed}
      origin={origin}
      fans={fans}/>
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
