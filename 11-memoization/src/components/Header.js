// ********** REACT.MEMO ********** //

// import React from 'react'

// function Header({ number }) {
//     console.log("Header Component Re-rendered");
//     return (
//         <div>Header - {number}</div>
//     )
// }
// export default React.memo(Header)

/* ************************************************************************************************* */

// ********** USEMEMO - FONKSİYONLU ÖRNEK ********** //

// boş [] ve {} ≠ boş [] ve {}

// import React from 'react'

// function Header({ number, data }) {
//     console.log("Header Component Re-rendered");
//     return (
//         <div>
//             Header
//             <br /><br />
//             <code>{JSON.stringify(data)}</code>
//         </div>
//     )
// }
// export default React.memo(Header)

/* ************************************************************************************************* */

// ********** USECALLBACK ********** //

import React from 'react'

function Header({ number, increment }) {
    console.log("Header Component Re-rendered");
    return (
        <div>
            Header
            <br /><br />
            <button onClick={increment}>Click</button>
        </div>
    )
}
export default React.memo(Header)