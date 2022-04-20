// axios adındaki kütüphaneyi npm i axios yazarak kuruyoruz
// javascript'te herhangi bir veri kaynağına gidip veri çeken fonksiyon //
import axios from "axios";

// ( async() =>{
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users")
//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1")
//     const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2")

//     console.log("users", users)
//     console.log("post1", post1)
//     console.log("post2", post2)
// }) () ;

// *********************************************************************************************************** //

// PROMİSES //
// resolve: bu işlem başarıyla gerçekleşmiş al sana datam demek 
// reject: kod çalışırken bir problem oluştu bunu reddettim demek
// bir promise resolve olduğunda then çalışır reject olduğunda catch çalışır.

// const getComments = () => {
//     return new Promise((resolve, reject) => {
//         console.log("comments")

//         resolve()
//     })
// }
// getComments()
//     .then(() => console.log("bitti"))
//     .catch((e) => console.log("e"));

// *********************************************************************************************************** //

// const getComments = () => {
//     return new Promise((resolve, reject) => {
//         resolve("comments")
//     })
// }
// getComments()
//     .then((data) => console.log(data))
// burda resolve'un içindeki data geldi ve onu console ile yazdırdım. Ekrana comments yazdı. Bu demek oluyorki resolve ile geçilen parametre then'e düştü. Burda string number ve obje de dönebiliriz.
//     .catch((e) => console.log("e")); 

// *********************************************************************************************************** //

// getComments 1 gönderildiğinde resolve çalışır 2 gönderildiğinde reject çalışır
// const getComments = (number) => {
//     return new Promise((resolve, reject) => {

//         if (number === 1) {
//             resolve({ text: "Selam" });
//         }
//         reject("Bir problem oluştu!")
//     });
// };
// getComments(2)
//     .then((data) => console.log(data))
//     .catch(e => console.log(e)); 

// *********************************************************************************************************** //

// yukardaki asycn ile çalışan kısımları biz promise'ımız ile dönecek şekilde oluşturmaya çalışalım
const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users")
        resolve(data)
        // reject("Bir sorun olustu")
    })
}

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(
            "https://jsonplaceholder.typicode.com/posts/" + post_id)
        // resolve(data);
        reject("Bir sorun daha olustu")
    })
}

// Peki burda bir hata varsa bunu nasıl yakalıcaz. Try catch blogları ile 
(async () => {

    try {
        const users = await getUsers()
        const post = await getPost(1)

        console.log(users)
        console.log(post);
    }
    catch (e) {
        console.log(e);
    }
})()

// aşağıdaki then ve catch'den kurtulmak için yukardaki gibi yaparız.

// (async () => {

//     await getUsers()
//         .then((data) => console.log(data))
//         .catch(e => console.log(e));

//     await getPost(1)
//         .then((data) => console.log(data))
//         .catch(e => console.log(e));
// })()

// ******************************************************************************************************** //        

// promise.all ifadesiyle tüm promise'leri çalıştırıp sonucu bekleyebilirim 
// bu elimizde birden fazla sıralı çalıştırmak istediğimiz promise dizisi varsa kullanabileceğimiz yöntem
         
// Promise.all([getUsers(), getPost(1)])
//     .then(console.log)
//     .catch(console.log)

// *********************************************************************************************************** //