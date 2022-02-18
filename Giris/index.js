/*
// bu kütüphane bizim verdiğimiz string'in arasında boşluk varsa arasına "-" koyar //
// 2. parametre verilirse arasına onu koyar //
import slugify from "slugify";
const title = slugify('some string', "*") // some-string
console.log(title)
*/

import hello, {topla, cikar, text, user, users} from './my-module.js'
console.log(topla(2, 4));
console.log(cikar(4, 2));
console.log(text)
console.log(user)
console.log(users)
hello("Uygar");