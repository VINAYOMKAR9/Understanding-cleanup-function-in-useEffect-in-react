import './App.css';
import Timer from './components/Timer';
import { useEffect, useState } from 'react';

function App() {
  const[show,setShow]= useState(false)

  return (
    <div className="App">

      <button onClick={()=> setShow((pr)=>!pr)}>
        {!show ? 'Show':'Hide'}
      </button>
      {show && <Timer/>}
    </div>
  );
}

export default App;
