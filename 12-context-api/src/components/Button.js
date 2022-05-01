// ********** CONTEXT OLUŞTURMAK ********** //

// // import ettiğimiz context'i kullanmak için //
// import { useContext } from 'react'

// // kullanmak istediğimiz context'i import etmemiz gerek //
// import ThemeContext from "../context/ThemeContext";

// function Button() {

//     // import ettiğimiz "ThemeContext"i parametre olarak geçtik //
//     const data = useContext(ThemeContext)

//     return (
//         <div>Button ({data}) </div>
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

// ********** THEME SWİTCHER - CONTEXT PROVIDER SIDE EFFECTS ********** //

import { useContext } from 'react'

import ThemeContext from "../context/ThemeContext";

function Button() {

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

/* ******************************************************************************************************* */

// ********** CUSTOM CONTEXT HOOK ********** //

// import ettiğimiz context'i kullanmak için //

// kullanmak istediğimiz context'i import etmemiz gerek //
// import { useTheme } from "../context/ThemeContext";

// function Button() {

//     // import ettiğimiz "ThemeContext"i parametre olarak geçtik //
//     const { theme, setTheme } = useTheme()

//     return (
//         <div>
//             Active Theme: {theme}
//             <br />
//             <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
//         </div>
//     )
// }
// export default Button