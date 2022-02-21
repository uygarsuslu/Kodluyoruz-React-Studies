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

function User({ name, surname, isLoggedIn, age, friends }) { // (props) //
    return (
        <>
            <h1>
                {
                    isLoggedIn ? `${name} ${surname} ${age}` : "Giris Yapmadınız"
                    // props.isLoggedIn ? `${props.name} ${props.surname}` : "Giris Yapmadınız"
                }
            </h1>

            {
                friends.map((friend) => (
                    <div key={friend.id}>{friend.name}</div>
                ))

                /*
                friends.map((friend) => {
                    const x = friend.id + 2
                    return <div key={friend.id}>{friend.name}</div>
                })
                */
            }
        </>
    )
}
export default User

/* ************************************************************************************************************ */