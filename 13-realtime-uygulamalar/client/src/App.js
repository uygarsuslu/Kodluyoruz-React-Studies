import './App.css';

import Palette from './components/Palette';
import { useEffect, useState } from "react";
import { init, subscribe } from "./socketApi";

function App() {

  const [activeColor, setActiveColor] = useState("#282c34")

  useEffect(() => {
    init();

    // burada geçtiğimiz parametreyi socketApi'de kullandık //
    subscribe((color) => {
      setActiveColor(color);
    });
  }, [])

  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <h1 className='h1'>
        Active Color: <br />
        {activeColor}
      </h1>
      <Palette activeColor={activeColor} />
    </div>
  );
}

export default App;
