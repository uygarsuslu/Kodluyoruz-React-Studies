// ********** CONTEXT OLUŞTURMAK ********** //

// import ettiğimiz context'i kullanmak için //
// import { useContext } from 'react'

// // kullanmak istediğimiz context'i import etmemiz gerek //
// import ThemeContext from "../context/ThemeContext";

// function Button() {

//     // import ettiğimiz "ThemeContext"i parametre olarak geçtik //
//     const data = useContext(ThemeContext)

//     return (
//         <div>Button {data} </div>
//     )
// }
// export default Button

/* ******************************************************************************************************* */

// ********** CONTEXT PROVİDER ********** //

// // import ettiğimiz context'i kullanmak için //
// import { useContext } from 'react'

// // kullanmak istediğimiz context'i import etmemiz gerek //
// import ThemeContext from "../context/ThemeContext";

// function Button() {

//     // import ettiğimiz "ThemeContext"i parametre olarak geçtik //
//     const { theme, setTheme } = useContext(ThemeContext)

//     return (
//         <div>
//             Active Theme: {theme}
//             <br />
//             <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
//         </div>
//     )
// }
// export default Button

/* ******************************************************************************************************* */

// ********** THEME SWİTCHER ********** //

// import ettiğimiz context'i kullanmak için //
import { useContext } from 'react'

// kullanmak istediğimiz context'i import etmemiz gerek //
import ThemeContext from "../context/ThemeContext";

function Button() {

    // import ettiğimiz "ThemeContext"i parametre olarak geçtik //
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            Active Theme: {theme}
            <br />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </div>
    )
}
export default Button