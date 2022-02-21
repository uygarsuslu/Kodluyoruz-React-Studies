function User({name, surname, isLoggedIn, age}) { // (props) //
    return (
        <h1>
            {
                isLoggedIn ? `${name} ${surname} (
                    
                )` : "Giris Yapmadınız"
                // props.isLoggedIn ? `${props.name} ${props.surname}` : "Giris Yapmadınız"
            }
            
        </h1>
    )
}
export default User