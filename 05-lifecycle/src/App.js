// useEffect //

// herhangi bir state'in güncellenmesi halinde çalışacağı anlamına gelir //

// import { useState, useEffect } from "react";

// function App() {

//   const [number, setNumber] = useState(0)
//   const [name, setName] = useState("Uygar")

//   // if yapısının içinde çalışmaz - useEffect ve useState //
//   useEffect(() => {
//     console.log("Component mount edildi")
//   }, []) // dependece array // // boş bırakılırsa = component mount edildiği anı yakala //

//   useEffect(() => {
//     console.log("Number State Guncellendi")
//   }, [number]) // sadece number click'e basınca yazar //

//   useEffect(() => {
//     console.log("Name State Guncellendi")
//   }, [name]) // sadece name click'e basınca yazar //

//   // useEffect(() => {
//   //   console.log("Number veya Name State Guncellendi")
//   // }, [number, name]) // herhangi bir click'e basınca yazar //

//   return (
//     <div className="App">

//       <h1>{number} </h1>
//       <button onClick={() => setNumber(number + 1)} >Click</button>

//       <hr />

//       <h1>{name} </h1>
//       <button onClick={() => setName("Mete")} >Click</button>
//     </div>
//   );
// }
// export default App;

/* ********************************************************************************************************** */

// COMPONENT UNMOUNT //

import { useState } from "react";
import Counter from "./components/Counter"

function App() {

const [isVisible, setIsVisible] = useState(true) // görünür olsun demek //

  return (
    <div className="App">
      {isVisible && <Counter />}
      {/* // sayaçı kapatır - açar // */}
      <button onClick={() => setIsVisible(!isVisible)}>Toogle Counter</button>

    </div>
  );
}
export default App;
