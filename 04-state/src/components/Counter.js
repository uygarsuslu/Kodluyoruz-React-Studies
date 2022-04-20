// SAYAÇ UYGULAMASI //

// bunu yaparken index.js'de import app'i yorum satırına aldım !! // 

// import { useState } from 'react'

// function Counter() {
//     const [count, setCount] = useState(0)

//     const increase = () => {
//         setCount(count + 1)
//     }

//     const decrease = () => {
//         setCount(count - 1)
//     }

//     const reset = () => {
//         setCount(0)
//     }

//     return (
//         <div>
//             <h1>{count}</h1>

//             <button onClick={decrease}>Decrease</button>
//             <button onClick={increase}>Increase</button>
//             <button onClick={reset}>Reset</button>

//             {/* <button onClick={() => setCount(count - 1)}>Decrease</button> 
//             <button onClick={() => setCount(count + 1)}>Increase</button> 
//             <button onClick={() => setCount(0)}>Reset</button> */}
//         </div>
//     )
// }
// export default Counter

/* ********************************************************************************************************** */

// RE-RENDER MANTIĞINI ANLAMAK (React-jQuery) //

import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    // jquery-example.html dosyasında jquery ile react kıyaslaması yaptık //
    // butona tıklayınca 0'ı 1 yapsın //
    // sadece 1 kere render eder //
    const increase = () => {
        setCount(1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    )
}
export default Counter