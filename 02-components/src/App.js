import './App.css';
// import React from "react"
import Header from './components/header'

// DEGİSKEN VEYA SABİTİN RENDER EDİLMESİ //
const name = "Mehmet";
const surname = "Seven";
// const isLoggedIn = true;
const isLoggedIn = false;

function App() {

  return (
    <>
      <h1>{isLoggedIn ? `Benim adım  ${name}, soyadım ${surname}` : "Giris Yapmadınız"} </h1>
      {/* <h1>{isLoggedIn && `Benim adım  ${name}, soyadım ${surname}`} </h1>
      <h1>{!isLoggedIn && "Giris Yapmadınız"}</h1> */}
      {/* <h1>{`Benim adım  ${name}, soyadım ${surname}`} </h1> */}
      {/* <h1>{name} {surname} </h1> */}
    </>
  )
}
export default App;




/*
// SIFIRDAN BİR COMPONENT YAZILMASI //
function App() {
  // return React.createElement("div", null, "Hello") //
  return (
    <>
      <h1>Hello React</h1>
      <Header />
      <p className="xyz" >
        lorem ıpsum dolor amet  sit  elit  dolor ut esse  vel unde minima  enim ab tu quam
      </p>

    <label htmlFor="myinput">
      Name
      <input id="myinput" />
    </label>

    </>
  )
}
export default App;
*/



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;