import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";

describe("Counter Tests", () => {

    let increaseBtn, decreaseBtn, count;

    // beforeEach describe ifadesini kullandığımız zaman birden fazla test yazabiliyoruz, bu noktada ilk test edilecek kısımdan önce beforeEach'i çalıştır en yukarda tanımladığımız increaseBtn, decreaseBtn, count'u tanımla yani doldur sonra alttaki increase btn'yi çalıştır diyoruz increase btn bittikten sonra tekrar beforeEach'i çalıştır sonra ikinci testi çalıştır diyoruz. Eğer üçüncü bir test olsaydı önce beforeEach'i çalıştıracak sonra da üçüncü test kodu neyse onu çalıştıracaktı.

    beforeEach(() => {
        console.log("her testten once calisacagim");
        render(<Counter />);
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0")
    });

    // her testten sonra çalışıyor //
    afterEach(() => {
        console.log("her testten sonra calisacagim");
    });

    // tüm testlerden önce bir defaya mahsus çalışıyor ve sonra çalışmıyor //
    beforeAll(() => {
        console.log("ilk basta bir kere calisacagim");
    });

    // tüm testlerden sonra bir defaya mahsus çalışıyor ve sonra çalışmıyor //
    afterAll(() => {
        console.log("en son bir kere calisacagim");
    })

    it("increase btn", () => {
        userEvent.click(increaseBtn)
        expect(count).toHaveTextContent("1")
    });

    it("decrease btn", () => {
        userEvent.click(decreaseBtn)
        expect(count).toHaveTextContent("-1")
    });

})

// ***** YUKARIDA KODU DAHA DERLİ TOPLU YAPAN DESCRIBE KULLANILDI ***** //

// burda it("increase btn") bir açıklama. Test patladığında hangi testin patladığını o açıklama sayesinde görüyoruz. Bunu test("increase btn") şeklinde de yazabiliriz.
// daha sonra bir callback fonksiyon yazıyoruz. Bunun içerisinde de yapmak istediğimiz test otomasyonunu yazarız //

// it("increase btn", () => {
//     render(<Counter />);

//     const count = screen.getByText("0")

//     // getByText'in içine butonun içinde ne yazıyorsa onu yazarız //
//     const increaseBtn = screen.getByText("Increase"); // butonu seçtik //

//     userEvent.click(increaseBtn) // butona tıklattırdık //

//     expect(count).toHaveTextContent("1")  // sonrasında ise butona tıklattıktan sonra ne bekliyorsam onu yazacağız //
// });

// it("decrease btn", () => {
//     render(<Counter />);

//     const count = screen.getByText("0")

//     // getByText'in içine butonun içinde ne yazıyorsa onu yazarız //
//     const decreaseBtn = screen.getByText("Decrease"); // butonu seçtik //

//     userEvent.click(decreaseBtn) // butona tıklattırdık //

//     expect(count).toHaveTextContent("-1")  // sonrasında ise butona tıklattıktan sonra ne bekliyorsam onu yazacağız //
// });