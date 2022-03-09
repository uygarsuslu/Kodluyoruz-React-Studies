import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";


describe("Todo Testleri", () => {

    let button, input;

    beforeEach(() => {
        render(<Todo />);

        // buton ve input'a eriştik //
        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
    });

    // varsayılan liste elemanlarının gelip gelmediğini test eder //
    test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
        const items = screen.getAllByText(/Item/i); // item ile başlayanlar //
        expect(items.length).toEqual(3);
    });

    // buton ve input dokumanda render edilmiş mi test eder //
    test("Input ve buton dokumanda bulunmali", () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    // input'a girilen değerin listede var olup olmadığını test eder //
    test("Inputa string girilip butona basılınca listeye eklenmeli", () => {

        // input'u doldur //
        const name = "Uygar";
        userEvent.type(input, name);

        // buton tıkla //
        userEvent.click(button);

        // kontrol et //
        expect(screen.getByText(name)).toBeInTheDocument();
    })

});