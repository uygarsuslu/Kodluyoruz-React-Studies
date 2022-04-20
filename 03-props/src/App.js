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

// import './App.css';

// import User from './components/User';

// const friends = [
//   {
//     id:1,
//     name: "Ahmet"
//   },
//   {
//     id:2,
//     name: "Mehmet"
//   },
//   {
//     id:3,
//     name: "Tayfun"
//   },
//   {
//     id:4,
//     name: "Gökhan"
//   },
//   {
//     id:5,
//     name: "Uygar"
//   },
// ]

// function App() {
//   return (
//     <>
//       <User
//         name="Mehmet"
//         surname="Seven"
//         isLoggedIn={true}
//         age={29}
//         friends={friends} />
//     </>
//   );
// }
// export default App;

/* ************************************************************************************************************ */

// PROP TYPES - PROP TYPES: isRequired - PROP TYPES: onOfType - PROP TYPES: shape //

// prop types = componentlere gönderdiğimiz propertylerin tiplerini belirleyebileceğimiz araç //  
// isRequired = prop tiplerini yazarken zorunlu olanlarıda belirtebiliyoruz //
// oneOfType = bir property'de birden fazla veri tipinin gönderilmesine imkan tanır //
// shape = obje olarak gönderdiğimiz propertylerde kullanırız // 

// import './App.css';

// import User from './components/User';

// const friends = [
//   {
//     id: 1,
//     name: "Ahmet"
//   },
//   {
//     id: 2,
//     name: "Mehmet"
//   },
//   {
//     id: 3,
//     name: "Tayfun"
//   },
//   {
//     id: 4,
//     name: "Gökhan"
//   },
//   {
//     id: 5,
//     name: "Uygar"
//   },
// ]

// function App() {
//   return (
//     <>
//       <User
//         name="Mehmet"
//         surname="Seven"
//         isLoggedIn={true}
//         age={"29"}
//         //  friends={friends} // map'in başına "friends &&" koyarak hata almamayı sağladık //
//         address={{
//           title:"Kartal/Istanbul",
//           zip: 34755
//         }}
//       />
//     </>
//   );
// }
// export default App;

/* ************************************************************************************************************ */

// DEFAULT PROPS //
// herhangi bir tanım yapılmamış bir prop'a varsayılan bir değerde verebiliyoruz //

import './App.css';

import User from './components/User';

function App() {
  return (
    <>
      <User
        // name="Mehmet"
        surname="Seven"
        //isLoggedIn={true}
        age={"29"}
      />
    </>
  );
}
export default App;