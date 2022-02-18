// verdigimiz parametredeki sure tamamlandiktan sonra bir kere calisiyor olmasi // 
// ilk parametre bir fonksiyon - ikinci parametre milisaniye cinsinden deger //
// setTimeout(() => {
//     console.log("Merhaba");
// },2000)


// her saniye ekrana yazı yazar //
// setInterval(() => {
//     console.log("Merhaba ben her saniye calisacagim");
// },1000);


// const sayHi = (cb) => {
//     cb()
// }
// buradaki parametre yukarıda cb()'ye düşüyor ve ekrana "hello" yazdırıyor //
// sayHi( () => { console.log("Hello") } )
// import { user, users } from "./my-module";


// javascript'te herhangi bir veri kaynağına gidip veri çeken fonksiyon //
import fetch from "node-fetch";

// AŞAĞIDA ASYNC - AWAIT ILE DAHA DUZGUN KULLANIMI YER ALIYOR //
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json()) // api'da ne varsa onu getirir //
//     .then((users) => {
//         console.log("Users Yüklendi", users)

//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((posts) => {
//                 console.log("Post 1 Yüklendi", posts)

//                 fetch("https://jsonplaceholder.typicode.com/posts/2")
//                     .then((data) => data.json())
//                     .then((data) => console.log("Post 2 Yüklendi", data))
//             })
//     })

// ASYNC - AWAIT //
// await yazmazsak o satırda beklemez ve bir sonraki satıra devam eder //
// async function getData() {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()

//     console.log("users", users)
//     console.log("post1", post1)
//     console.log("post2", post2)
    
// }
// getData()

// javascript'te anonim foksiyon oluşturma () () //
( async() =>{
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()

    console.log("users", users)
    console.log("post1", post1)
    console.log("post2", post2)
}) () ;