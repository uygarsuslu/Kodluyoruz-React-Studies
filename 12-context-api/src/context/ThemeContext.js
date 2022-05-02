// ********** CONTEXT OLUŞTURMAK ********** //

// import { createContext } from "react";

// const ThemeContext = createContext();

// export default ThemeContext;

/* ******************************************************************************************************* */

// ********** CONTEXT PROVİDER ********** //

// import { createContext, useState } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {

//     const [theme, setTheme] = useState("dark")

//     const values = {
//         theme,
//         setTheme,
//     }

//     return <ThemeContext.Provider value={values}>
//         {children}
//     </ThemeContext.Provider>
// }
// export default ThemeContext;

/* ******************************************************************************************************* */

// ********** THEME SWİTCHER ********** //

// import { createContext, useState } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {

//     const [theme, setTheme] = useState("dark")

//     const values = {
//         theme,
//         setTheme,
//     }

//     return <ThemeContext.Provider value={values}>
//         {children}
//     </ThemeContext.Provider>
// }
// export default ThemeContext;

/* ******************************************************************************************************* */

// ********** CONTEXT PROVIDER SIDE EFFECTS - MULTI CONTEXT ********** //

// temayı dark'ta bırakıp sayfayı yenilersek dark olarak, light'ta bırakıp sayfayı yenilersek light olarak yükler //

import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    // localStorage'de o anda bir şey yoksa light yazar
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    const values = {
        theme,
        setTheme,
    }

    return <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeContext;

/* ******************************************************************************************************* */

// **********  CUSTOM CONTEXT HOOK ********** //

// import { createContext, useState, useEffect, useContext } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {

//     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

//     useEffect(() => {
//         localStorage.setItem("theme", theme)
//     }, [theme])

//     const values = {
//         theme,
//         setTheme,
//     }

//     return <ThemeContext.Provider value={values}>
//         {children}
//     </ThemeContext.Provider>
// }

// export const useTheme = () => useContext(ThemeContext)