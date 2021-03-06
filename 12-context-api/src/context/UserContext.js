// ********** MULTI CONTEXT ********** //

// import { createContext, useState } from "react";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {

//     const [user, setUser] = useState(null);

//     const values = { user, setUser }

//     return <UserContext.Provider value={values}>{children}</UserContext.Provider>
// }
// export default UserContext;

/* ******************************************************************************************************* */

// ********** CUSTOM CONTEXT HOOK ********** //

// useContext işlemini burada yaptık

import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const values = { user, setUser }

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
// export default UserContext
