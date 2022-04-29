// ********** REACT.MEMO ********** //

// import './App.css';

// import { useState } from "react";
// import Header from "./components/Header";

// function App() {

//   const [number, setNumber] = useState(0)

//   return (
//     <div className="App">
//       {/* sayı 5 olana kadar render edilmez */}
//       <h3><Header number={number < 5 ? 0 : number} /></h3>
//       <hr />
//       <h1>{number}</h1>
//       <button onClick={() => setNumber(number + 1)}>Click</button>
//     </div>
//   );
// }
// export default App;

/* ************************************************************************************************* */

// ********** USEMEMO ********** //

// import './App.css';

// import { useState, useMemo } from "react";
// import Header from "./components/Header";

// // YÖNTEM 1: fonksiyon dışına vererek gereksiz yere render edilmesini önler
// // const data = {name:"Mehmet"}

// function App() {

//   const [number, setNumber] = useState(0)

//   // YÖNTEM 2: gereksiz yere render edilmesini önler
//   const data = useMemo(() => {
//     return [{ name: "Mehmet", number }]
//   }, [number])

//   return (
//     <div className="App">
//       {/* <h3><Header data={data} /></h3> */}
//       <h3><Header number={number < 5 ? 0 : number} data={data} /></h3>
//       <hr />
//       <h1>{number}</h1>
//       <button onClick={() => setNumber(number + 1)}>Click</button>
//     </div>
//   );
// }
// export default App;

// ********** USEMEMO - FONKSİYONLU ÖRNEK ********** //

// import './App.css';

// import { useState, useMemo } from "react";
// import Header from "./components/Header";

// function App() {

//   const [number, setNumber] = useState(0)
//   const [text, setText] = useState("")

//   // input'a bir şey girildiği anda render edilmesini önledik
//   const data = useMemo(() => {
//     return calculateObject(number);
//   }, [number])

//   // const data = calculateObject();

//   return (
//     <div className="App">
//       <h3><Header data={data} /></h3>
//       {/* <h3><Header number={number < 5 ? 0 : number} data={data} /></h3> */}
//       <hr />
//       <h1>{number}</h1>
//       <button onClick={() => setNumber(number + 1)}>Click</button>
//       <br /> <br />
//       <input value={text} onChange={({ target }) => setText(target.value)} ></input>
//     </div>
//   );
// }

// function calculateObject(number) {
//   console.log("Calculating...");

//   for (let i = 0; i < 100000000; i++) { }
//   console.log("Calculating completed!!");

//   return { name: "Mehmet", number }
// }
// export default App;

/* ************************************************************************************************* */

// ********** USECALLBACK ********** //

import './App.css';

import { useState, useCallback } from "react";
import Header from "./components/Header";

function App() {

  const [number, setNumber] = useState(0)

  const increment = useCallback(() => {
    // render edilmemesi için "prevState" yapmalıyız
    setNumber((prevState) => prevState + 1)
  }, [])

  return (
    <div className="App">
      <h3><Header increment={increment} /></h3>
      <hr />
      <h1>{number}</h1>
    </div>
  );
}
export default App;