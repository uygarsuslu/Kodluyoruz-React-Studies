// PROPS NEDİR? NASIL KULLANILIR? //

// import './App.css';

// import User from './components/User';

// function App() {
//   return (
//     <>
//       <User name="Mehmet" surname="Seven" isLoggedIn={true} age={29} />
//     </>
//   );
// }

// export default App;

/* ************************************************************************************************************ */

// DÖNGÜLERDE "KEY" PROP'U //

import './App.css';

import User from './components/User';

const friends = [
  {
    id:1,
    name: "Ahmet"
  },
  {
    id:2,
    name: "Mehmet"
  },
  {
    id:3,
    name: "Tayfun"
  },
  {
    id:4,
    name: "Gökhan"
  },
  {
    id:5,
    name: "Uygar"
  },
]

function App() {
  return (
    <>
      <User
        name="Mehmet"
        surname="Seven"
        isLoggedIn={true}
        age={29}
        friends={friends} />
    </>
  );
}

export default App;

/* ************************************************************************************************************ */