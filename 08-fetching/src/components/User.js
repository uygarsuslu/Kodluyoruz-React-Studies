// NATIVE FETCH //
// herhangi bir veri kaynağına gidip o veri kaynağındaki ilgili veriyi aldıktan sonra ekranımızda nasıl gösterebiliriz //

// import { useEffect, useState } from 'react'

// function User() {

//   const [users, setUsers] = useState([])
//   // veri yüklenmeye çalışılırken loading ifadesi //
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json()) // body'i stingfy olarak verdiği için json'a çevirme işlemi //
//       .then((data) => {
//         setUsers(data);
//         // setIsLoading(false); // liste yüklendikten sonra loading yazısını kaldırma YÖNTEM 1 //
//         // .then((users) => console.log(users))
//       })
//       .catch((e) => console.log(e))
//       .finally(() => setIsLoading(false)) // liste yüklendikten sonra loading yazısını kaldırma YÖNTEM 2 //
//   }, [])

//   return (
//     <div>
//       <h1>Users</h1>

//       {isLoading && <div>loading...</div>}

//       {
//         users.map((user) =>
//           <div key={user.id}> {user.name} </div>)
//       }
//     </div>
//   )
// }
// export default User 

/* **************************************************************************************************** */

// AXIOS //
// herhangi bir veri kaynağına gidip o veri kaynağındaki ilgili veriyi aldıktan sonra ekranımızda nasıl gösterebiliriz //

import { useEffect, useState } from 'react'

import axios from "axios";

function User() {

  const [users, setUsers] = useState([])
  // veri yüklenmeye çalışılırken loading ifadesi //
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false)) // liste yüklendikten sonra loading yazısını kaldırma YÖNTEM 2 //
  }, [])

  return (
    <div>
      <h1>Users</h1>

      {isLoading && <div>loading...</div>}

      {
        users.map((user) =>
          <div key={user.id}> {user.name} </div>)
      }
    </div>
  )
}
export default User