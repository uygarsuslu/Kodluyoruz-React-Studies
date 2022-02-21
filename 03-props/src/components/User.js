// PROPS NEDİR? NASIL KULLANILIR? //

// function User({name, surname, isLoggedIn, age}) { // (props) //
//     return (
//         <h1>
//             {
//                 isLoggedIn ? `${name} ${surname} ${age}` : "Giris Yapmadınız"
//                 // props.isLoggedIn ? `${props.name} ${props.surname}` : "Giris Yapmadınız"
//             }
//         </h1>
//     )
// }
// export default User


/* ************************************************************************************************************ */


// DÖNGÜLERDE "KEY" PROP'U //
// div içinde key verdik. bunu çalıştırdığımız her döngü listelemesinde mutlaka en dıştaki elemana vermemiz gerekecek. //

// function User({ name, surname, isLoggedIn, age, friends }) { // (props) //
//     return (
//         <>
//             <h1>
//                 {
//                     isLoggedIn ? `${name} ${surname} ${age}` : "Giris Yapmadınız"
//                     // props.isLoggedIn ? `${props.name} ${props.surname}` : "Giris Yapmadınız"
//                 }
//             </h1>

//             {
//                 friends.map((friend) => (
//                     <div key={friend.id}>{friend.name}</div>
//                 ))

//                 /*
//                 friends.map((friend) => {
//                     const x = friend.id + 2
//                     return <div key={friend.id}>{friend.name}</div>
//                 })
//                 */
//             }
//         </>
//     )
// }
// export default User


/* ************************************************************************************************************ */

// PROP TYPES */* PROP TYPES: isRequired */* PROP TYPES: oneOfType //

// prop types = componentlere gönderdiğimiz propertylerin tiplerini belirleyebileceğimiz araç //  
// isRequired = prop tiplerini yazarken zorunlu olanlarıda belirtebiliyoruz //

// import PropTypes from "prop-types"

// function User({ name, surname, isLoggedIn, age, friends }) { // (props) //
//     return (
//         <>
//             <h1>
//                 {
//                     isLoggedIn ? `${name} ${surname} ${age}` : "Giris Yapmadınız"
//                     // props.isLoggedIn ? `${props.name} ${props.surname}` : "Giris Yapmadınız"
//                 }
//             </h1>

//             {
//                 friends && // varsa göster demek //
//                 friends.map((friend) => (
//                     <div key={friend.id}>{friend.name}</div>
//                 ))
//             }
//         </>
//     )
// }

// // BU KISMI DOĞRU YAPMAZSAK CONSOLE'DA HATA VERİR //
// User.propTypes = {
//     name: PropTypes.string.isRequired, // zorunlu //
//     surname: PropTypes.string.isRequired,
//     isLoggedIn: PropTypes.bool.isRequired,
//     age: PropTypes.number.isRequired,
//     friends: PropTypes.array
// }
// export default User

/* ************************************************************************************************************ */

// PROP TYPES: oneOfType //
// oneOfType = bir property'de birden fazla veri tipinin gönderilmesine imkan tanır //
// yani biz oneOfType'ı kullanınca hem "string" olarak hemde "number" olarak tanımladığım için 2 türlü de yazsam app.jsdeki ilgili yere hata almıyorum. Zorunlu kılmak için ise parantezlerin sonuna isRequired tanımını girmek yeterli olacaktır //

// import PropTypes from "prop-types"

// function User({ name, surname, isLoggedIn, age, friends }) { // (props) //
//     return (
//         <>
//             <h1>
//                 {
//                     isLoggedIn ? `${name} ${surname} ${age}` : "Giris Yapmadınız"
//                     // props.isLoggedIn ? `${props.name} ${props.surname}` : "Giris Yapmadınız"
//                 }
//             </h1>

//             {
//                 friends && // varsa göster demek //
//                 friends.map((friend) => (
//                     <div key={friend.id}>{friend.name}</div>
//                 ))
//             }
//         </>
//     )
// }

// // BU KISMI DOĞRU YAPMAZSAK CONSOLE'DA HATA VERİR //
// User.propTypes = {
//     name: PropTypes.string.isRequired, // zorunlu //
//     surname: PropTypes.string.isRequired,
//     isLoggedIn: PropTypes.bool.isRequired,
//     age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//     friends: PropTypes.array
// }
// export default User

/* ************************************************************************************************************ */

// PROP TYPES: shape //
// obje olarak gönderdiğimiz propertylerde kullanırız // 

// import PropTypes from "prop-types"

// function User({ name, surname, isLoggedIn, age, friends, address }) { // (props) //
//     return (
//         <>
//             <h1>
//                 {
//                     isLoggedIn ? `${name} ${surname} ${age}` : "Giris Yapmadınız"
//                     // props.isLoggedIn ? `${props.name} ${props.surname}` : "Giris Yapmadınız"
//                 }
//             </h1>

//             <h4>{address.title} {address.zip}</h4>

//             {
//                 friends && // varsa göster demek //
//                 friends.map((friend) => (
//                     <div key={friend.id}>{friend.name}</div>
//                 ))
//             }
//         </>
//     )
// }

// // BU KISMI DOĞRU YAPMAZSAK CONSOLE'DA HATA VERİR //
// User.propTypes = {
//     name: PropTypes.string.isRequired, // zorunlu //
//     surname: PropTypes.string.isRequired,
//     isLoggedIn: PropTypes.bool.isRequired,
//     age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//     friends: PropTypes.array,
//     address: PropTypes.shape({
//         title: PropTypes.string,
//         zip: PropTypes.number
//     })
// }
// export default User

/* ************************************************************************************************************ */

// DEFAULT PROPS //
// herhangi bir tanım yapılmamış bir prop'a varsayılan bir değerde verebiliyoruz //

import PropTypes from "prop-types"

function User({ name, surname, isLoggedIn, age, friends, address }) { // (props) //

    // bunu dışarda tanımlamamızın sebebi eğer bilgi yoksa ad soyad bilgilerini ekrana getirmesin //
    if (!isLoggedIn) {
        return <div>Giris Yapmadiniz.</div>
    }

    return (
        <>
            <h1>
                {`${name} ${surname} (${age})`}
            </h1>

            <h4>{address.title} {address.zip}</h4>

            {
                friends && // varsa göster demek //
                friends.map((friend) => (
                    <div key={friend.id}>{friend.name}</div>
                ))
            }
        </>
    )
}

// BU KISMI DOĞRU YAPMAZSAK CONSOLE'DA HATA VERİR //
User.propTypes = {
    name: PropTypes.string.isRequired, // zorunlu //
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: "Isimsiz",
    isLoggedIn: false // app.js'de belirtilmezse burda deger atayabiliyoruz //
}
export default User