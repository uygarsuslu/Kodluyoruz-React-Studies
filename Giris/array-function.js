// push, map, find, filter, some, every, includes //

// *********************************************************************************************************** //

/*
// PUSH // // array'in sonuna eleman ekler //
const users = ["Mehmet", "Ahmet", "Murat"]

users.push("Ayşe")
users.push("Fatma")
console.log(users);
*/

// *********************************************************************************************************** //

/*
// MAP // // array içinde tek tek döner //
const users = ["Mehmet", "Ahmet", "Murat"]

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

// map fonksiyonu diyor ki senin elle vermene gerek yok ben zaten hepsini tek tek dönücem diyor
users.map((item) => { console.log(item); })

// veya array'in içinde objeler olsaydı.
const kullanicilar = [
    {
        name: "Mehmet"
    },
    {
        name: "Ahmet"
    },
    {
        name: "Sevilay"
    }
]
kullanicilar.map((item) => { console.log(item); })

// item altında name'i yazdırmak istersek;

kullanicilar.map((item) => {
    console.log(item.name)
})
*/

// *********************************************************************************************************** //

/*
// FIND // // array içerisinde bizim verdiğimiz koşullarla arama işlemi yapar //
const users = [
    {
        name: "Mehmet",
        age: 18
    },
    {
        name: "Mehmet",
        age: 29

    },
    {
        name: "Sevilay",
        age: 18

    }
]

const fındIt = users.find((item) => item.name == "Mehmet" && item.age > 20)
console.log(fındIt); // bulduğu ilk elemanı getiriyor
*/

// *********************************************************************************************************** //

/*
// FILTER // // filtreleme yapıyor //

const users = [
    {
        name: "Mehmet",
        age: 10,
    }, {
        name: "Mehmet",
        age: 29,
    }, {
        name: "Sevilay",
        age: 40,
    }
]

const filtered = users.filter((item) => item.name === "Mehmet" && item.age < 20)
console.log(filtered)

// item yazmak istemiyorsak doğrudan name ve age'de yazabiliriz.

// const filtered = users.filter(({name, age}) => name === "Mehmet" && age < 20) // {name, age} süslü paranteze almayı unutma.
// console.log(filtered); // [ { name: 'Mehmet', age: 29 } ]
*/

// *********************************************************************************************************** //

/*
// SOME // //array'in içersindeki elemanlardan biri verdiğimiz koşula uyuyorsa true döner uymuyorsa false döner //

const users = [
    {
        name: "Mehmet",
        age: 10,
    }, {
        name: "Mehmet",
        age: 29,
    }, {
        name: "Sevilay",
        age: 40,
    }
]

// yaşı 10'a eşit olan var mı diye kontrol edelim.

// const some = users.some((item) => item.age === 10)
// console.log(some); // true

// const some2 = users.some(({age}) => age === 29)
// console.log(some2); //true
*/

// *********************************************************************************************************** //

/*
// EVERY // // array'in tüm elemanlarının şarta uymasını bekliyor uyarsa true uymazsa false döner //

const users = [{
    name:"Mehmet",
    age: 10,
}, {
    name: "Mehmet",
    age: 29,
}, {
    name: "Sevilay",
    age: 40,
}
] 

// const every = users.every((item) => item.age > 5);
// console.log(every); // true

// const every2 = users.every((item) => item.name === "Mehmet");
// console.log(every2); // false
*/

// *********************************************************************************************************** //

/*
// INCLUDES // // array'in içinde bizim girdiğimiz değerin olup olmadığını kontrol eder true - false döner //

const meyveler = ["elma", "armut", "muz"]
const isIncluded = meyveler.includes("elma")
console.log(isIncluded); // true // kivi yazsaydım false gelirdi
*/