import react, { useState } from 'react';
import './App.css';


  function App() {
    const [hori, sethori] = useState(10);
    const [veri, setveri] = useState(10);
    const [blur, setblur] = useState(10);
    const [color, setcolor] = useState('black');
  
    return (
      <>
        <h1>This is a Box Shadow template</h1>
  
          {/* creating a control section of inputs */}
        <div className='App'>
          <div className='controls'>
            <label>Horizontal :</label>
            <input type='range' min='-100' max='100' value={hori} onChange={(e) => sethori(e.target.value)} />
            <label>Vertical :</label>
            <input type='range' min='-100' max='100' value={veri} onChange={(e) => setveri(e.target.value)} />
            <label>Blur :</label>
            <input type='range' min='0' max='100' value={blur} onChange={(e) => setblur(e.target.value)} />
            <label>color :</label>
            <input type='color' value={color} onChange={(e) => setcolor(e.target.value)} />
          </div>
  
  {/* applyying the useset and displaying */}
          <div className='box' style={{ boxShadow: `${hori}px ${veri}px ${blur}px ${color}` }}>
            <h4>Copy and paste in your code</h4>
  
            <h2 className='innertext'>box-shadow:{`${hori}px ${veri}px ${blur}px`}</h2>
            <h3>color:{`${color}`}</h3>
          </div>
        </div>
        <div className='footer'>
          <h3>Created by Shahbaz alam</h3>
        </div>
      </>
   
    
  )
}

export default App;
