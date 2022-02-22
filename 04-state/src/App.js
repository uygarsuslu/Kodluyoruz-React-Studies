// STATE NEDİR? NASIL OLUŞTURULUR? //

// import {useState} from 'react'

// function App() {

// const[name, setName] = useState("Uygar")
// const[age, setAge] = useState(25)

//   return (
//     <div className="App">
//       <h1>Merhaba {name}</h1>
//       <h1>{age}</h1>
//       <button onClick={() => setName("Ahmet")}>Change Name</button><br />
//       <button onClick={() => setAge("23")}>Change Age</button>
//     </div>
//   );
// }
// export default App;

// react'in altında useState diye bir hook var. Bunu import ettikten sonra componentimin içinde fonksiyonun içinde return'in hemen dışında bir tanım yapıcaz. isim verilerini tutan bir state tanımlamamız gerekiyor. ilk olarak state'in ismini tanımlıyoruz bu ismi return ettiğimiz kısımda kullanıyoruz. Sonra bu state'in değerini değiştirecek olan fonksiyonun ismini vermem gerekiyor. Genelde state ismi name ise değerini değiştirecek fonksiyon setName seklinde belirtilir. age ise setAge gibi. Bu bir zorunluluk değil sadece genel yazım standartı bu şekilde oluşmuş //

// Daha sonra useState hook'unu kullaanarak state'imiz olusturduk. useState'in açmış olduğumuz fonksiyona bir parametre verebiliyoruz. Parametrenin anlamı da şu bu state ilk oluşturulurken bir değer ataması yapabilirsiniz o yüzden burda "Uygar" diye verdik. Daha sonra tanımladığımız state'i süslü parantezler içersinde kullanıcaz //

// Burda click butonuna basınca Uygar Ahmet oluyor. Burda javascript'in bize vermiş olduğu tüm veri tipleriyle state tanımlamamızı yapabiliriz string number booolean gibi //

// Herhangi bir state güncellendiği anda return'ün içindeki render işlemi baştan yapılır yani o görüntü yeniden olusturulur çünkü state değişti state değiştiği içinde arayüzde görünmesi gereken ifade değişti dolayısıyla component render ediliyor //

/* ********************************************************************************************************** */

// ARRAY STATES //

// state'imizi bir array olarak tanımlayıp bu state'i nasıl güncellleyebileceğimizi öğrenmeye çalışcaz //

// import { useState } from 'react'

// function App() {

//   const [name, setName] = useState("Uygar")
//   const [age, setAge] = useState(25)
//   const [friends, setFriends] = useState(["Uygar", "Gokalp"])

//   return (
//     <div className="App">
//       <h1>Merhaba {name}</h1>
//       <h1>{age}</h1>
//       <button onClick={() => setName("Ahmet")}>Change Name</button><br />
//       <button onClick={() => setAge("23")}>Change Age</button>
//       <hr />
//       <br />
//       <h2>Friends</h2>
//       {
//         // Buradaki div etiketi yerine başka bir HTML etiketi de olabilir. Burda dikkat etmemiz gereken şey listeleme işlemi yapıyorsak en dıştaki etikete bir key propu vermemiz gerekirdu. bu propa istediğimiz ismi verebiliriz index vb. //
//         friends.map((friend, key) => (
//         <div key={key}>{friend} </div>))
//       }
//       <button onClick={() => setFriends([...friends,"Tayfun"])}>Add New Friend</button>
//     </div>
//   );
// }
// export default App;

// setFriends(["Tayfun"]) böyle butona basınca sadece Tayfun kaldı. Bunun sebebi setFriends'in içinde sadece Tayfun elemanının olması yani friends'in içinde var olan tek değer Tayfun olduğu için sadece o görünüyor. Yapmamız gereken friends'in içinde daha önce var olan değerleri de koruyarak bu atama işlemini yapmamız gerekkiyor. O yüzden           ...friends yazarak daha önceki friends array'inin içindeki elemanlarıda koyuyoruz //

/* ********************************************************************************************************** */

// OBJECT STATES //

import { useState } from 'react'

function App() {

  const [name, setName] = useState("Uygar")
  const [age, setAge] = useState(25)
  const [friends, setFriends] = useState(["Uygar", "Gokalp"])
  const [address, setAddress] = useState({ title: "Istanbul", zip: 3434 })

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h1>{age}</h1>
      <br />
      <button onClick={() => setName("Ahmet")}>Change Name</button><br />
      <button onClick={() => setAge("23")}>Change Age</button>

      <hr />
      <br />

      <h2>Friends</h2>
      {
        // Buradaki div etiketi yerine başka bir HTML etiketi de olabilir. Burda dikkat etmemiz gereken şey listeleme işlemi yapıyorsak en dıştaki etikete bir key propu vermemiz gerekirdu. bu propa istediğimiz ismi verebiliriz index vb. //
        friends.map((friend, key) => (
          <div key={key}>{friend} </div>))
      }
      <br />
      <button onClick={() => setFriends([...friends, "Tayfun"])}>Add New Friend</button>

      <hr />
      <br />

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <br />
      {/* burada "...address" yazmamımzıın sebebi sadece bir değeri değiştirirsek diğeri boş gelmesin diye */}
      <button onClick={() => setAddress({...address, title: "Ankara"})}>Change The Address</button>
    </div>
  );
}
export default App;