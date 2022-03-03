// ********** CONTEXT PROVİDER ********** //

// import { useContext } from 'react'

// import ThemeContext from "../context/ThemeContext";

// function Header() {

//     const { theme, setTheme } = useContext(ThemeContext)

//     return (
//         <div>Active Theme: {theme}
//             <br />
//             <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
//         </div>
//     )
// }
// export default Header

/* ******************************************************************************************************* */

// ********** THEME SWİTCHER ********** //

// import { useContext } from 'react'

// import ThemeContext from "../context/ThemeContext";

// function Header() {

//     const { theme, setTheme } = useContext(ThemeContext)

//     return (
//         <div>Active Theme: {theme}
//             <br />
//             <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
//         </div>
//     )
// }
// export default Header

/* ******************************************************************************************************* */

// ********** CUSTOM CONTEXT HOOK ********** //

import { useTheme } from "../context/ThemeContext";

function Header() {

    const { theme, setTheme } = useTheme()

    return (
        <div>Active Theme: {theme}
            <br />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </div>
    )
}
export default Header