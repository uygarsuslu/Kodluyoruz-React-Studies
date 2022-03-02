// ********** CONTEXT OLUŞTURMAK ********** //

// import './App.css';
// import ThemeContext from './context/ThemeContext';
// import Button from "./components/Button";

// // provider = sağlayıcı //
// // render edilen bütün komponentlere provide edilen bütün dataları gönderebilmem gerekiyor //

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Button />
//     </ThemeContext.Provider>
//   )
// }
// export default App;

/* ******************************************************************************************************* */

// ********** CONTEXT PROVİDER ********** //

// import './App.css';
// import Button from "./components/Button";
// import Header from "./components/Header";

// // import ThemeContext from './context/ThemeContext';
// import { ThemeProvider } from './context/ThemeContext';

// // provider = sağlayıcı //
// // render edilen bütün komponentlere provide edilen bütün dataları gönderebilmem gerekiyor //

// function App() {
//   return (
//     <ThemeProvider>
//       <Button />
//       <hr />
//       <Header />
//     </ThemeProvider>
//   )
// }
// export default App;

/* ******************************************************************************************************* */

// ********** THEME SWİTCHER ********** //

import './App.css';
import Container from './components/Container';

// import ThemeContext from './context/ThemeContext';
import { ThemeProvider } from './context/ThemeContext';

// provider = sağlayıcı //
// render edilen bütün komponentlere provide edilen bütün dataları gönderebilmem gerekiyor //

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  )
}
export default App;