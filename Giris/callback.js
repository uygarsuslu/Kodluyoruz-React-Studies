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

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => console.log(users))