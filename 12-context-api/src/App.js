// ********** CONTEXT OLUŞTURMAK ********** //

// import './App.css';
// import ThemeContext from './context/ThemeContext';
// import Button from "./components/Button";

// // provider = sağlayıcı //

// function App() {
//   return (
//     // burada child olarak render edilen componentlere "ThemeContext"ten sağlanan bütün dataları gönderir
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

// ********** THEME SWİTCHER - CONTEXT PROVIDER SIDE EFFECTS ********** //

// import './App.css';
// import Container from './components/Container';

// // import ThemeContext from './context/ThemeContext';
// import { ThemeProvider } from './context/ThemeContext';

// // provider = sağlayıcı //
// // render edilen bütün komponentlere provide edilen bütün dataları gönderebilmem gerekiyor //

// function App() {
//   return (
//     <ThemeProvider>
//       <Container />
//     </ThemeProvider>
//   )
// }
// export default App;

/* ******************************************************************************************************** */

// ********** MULTI CONTEXT - CUSTOM CONTEXT HOOK ********** //

import './App.css';
import Container from './components/Container';

import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  )
}
export default App;