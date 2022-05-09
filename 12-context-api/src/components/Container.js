// ********** THEME SWİTCHER - CONTEXT PROVIDER SIDE EFFECTS ********** //

// import { useContext } from 'react'

// import Button from "./Button";
// import Header from "./Header";

// import ThemeContext from "../context/ThemeContext";

// function Container() {

//     const { theme } = useContext(ThemeContext)

//     return (
//         <div className={`app ${theme}`}>
//             <Button />
//             <hr />
//             <Header />
//         </div>
//     )
// }
// export default Container

/* ******************************************************************************************************* */

// ********** MULTI CONTEXT ********** //

// import { useContext } from 'react'

// import Button from "./Button";
// import Header from "./Header";

// import ThemeContext from "../context/ThemeContext";
// import Profile from './Profile';

// function Container() {

//     const { theme } = useContext(ThemeContext)

//     return (
//         <div className={`app ${theme}`}>
//             <Button />
//             <hr />
//             <Header />
//             <hr />
//             <Profile />
//         </div>
//     )
// }
// export default Container

/* ******************************************************************************************************* */

// ********** CUSTOM CONTEXT HOOK ********** //

// context'i import etmeden ve useContext işleminden kurtulduk

import Button from "./Button";
import Header from "./Header";

import { useTheme } from "../context/ThemeContext";
// import ThemeContext from "../context/ThemeContext";

import Profile from './Profile';

function Container() {

    const { theme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Button />
            <hr />
            <Header />
            <hr />
            <Profile />
        </div>
    )
}
export default Container