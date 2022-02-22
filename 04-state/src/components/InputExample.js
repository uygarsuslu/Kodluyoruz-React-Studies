// INPUT İCİN STATE TANIMI YAPMAK //

// bunu yaparken index.js'de import counter'ı yorum satırına aldım !! // 

// import {useState} from 'react'

// function InputExample() {

// const [name, setName] = useState("")
// const [surname, setSurname] = useState("")

// const onChangeName = (e) => setName(e.target.value)
// const onChangeSurname = (e) => setSurname(e.target.value)

//   return (
//     <div>
//         name: <br />
//         {/* // onChange ÖNEMLİ !!! //
//         // e.target.value = inputun icindeki degeri state'imize yazmak istersek // */}
//         {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
//         <input value={name} onChange={onChangeName} />
//         <br />
//         <br />

//         surname: <br />
//         <input value={surname} onChange={onChangeSurname} />
//         <br />
//         <br />

//         {name} {surname}
//     </div>
//   )
// }
// export default InputExample

/* ********************************************************************************************************** */

// INPUT İCİN STATE TANIMI YAPMAK - KISAYOL - //

import { useState } from 'react'

function InputExample() {

    const [form, setForm] = useState({ name: "", surname: "" })

    const onChangeInput = (e) => {
        // BU KISIM ÖNEMLİ //
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div>
            name: <br />
            <input name="name" value={form.name} onChange={onChangeInput} />
            <br />
            <br />

            surname: <br />
            <input name="surname" value={form.surname} onChange={onChangeInput} />
            <br />
            <br />

            {form.name} {form.surname}
        </div>
    )
}
export default InputExample