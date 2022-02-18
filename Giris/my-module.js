// export default (name) ile de yapabiliriz //
const hello = (name) => {
    // console.log("hello " + name) //
    console.log(`hello ${name}`)
}

const topla = function topla(a, b) {
    return a + b;
}

const cikar = (a, b) => a - b;

// index.js dosyasinda kullanmak için dışa aktarmamız lazım //
export default hello
//export {hello, topla, cikar};
// export default topla;
export {topla, cikar, text, user, users}


const text = "Text"

const user = {
    name: "Uygar",
    surname: "Süslü",
}

const users = [
    {
        name: "Ahmet",
        surname: "Mehmet",
    },
    {
        name: "Erhan",
        surname:"Kolcak",
    }
]


/*
function topla(a, b){
    return a + b;
}
// index.js dosyasinda kullanmak için dışa aktarmamız lazım //
export default topla;
*/

/*
const topla = (a, b) => {
    return a + b;
}
export default topla;
*/

/*
const topla = (a, b) =>  a + b;
export default topla;
*/