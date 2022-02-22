// COMPONENT UNMOUNT //

// component'i unmount ettikten sonra o component'i tekrardan güncellemeye çalışabilecek ne varsa o işlemleri durdurur //

import { useState, useEffect } from "react";

function Counter() {

    const [number, setNumber] = useState(0)

    // if yapısının içinde çalışmaz - useEffect ve useState //
    useEffect(() => {
        console.log("Component mount edildi")

        const interval = setInterval(() => {
            // n parametresi number'ın o anda ifade etmiş olduğu değer //
            setNumber((n) => n + 1);
        }, 1000)

        // componenet unmount edildiği anda setInterval'i durdurmamız gerekiyor //
        // return () => console.log("Component unmount edildi");

        // interval'i durdurma kısmı //
        return () => clearInterval(interval)

    }, []) // dependece array // // boş bırakılırsa = component mount edildiği anı yakala //

    useEffect(() => {
        console.log("number state guncellendi")
    }, [number])

    return (
        <div>
            <h1>{number} </h1>
        </div >
    )
}
export default Counter

