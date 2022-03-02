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

import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark")

    const values = {
        theme,
        setTheme,
    }

    return <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeContext;