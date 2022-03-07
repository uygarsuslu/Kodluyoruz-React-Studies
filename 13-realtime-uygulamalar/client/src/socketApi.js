import io from "socket.io-client";

let socket;

// bağlantı sağlayacağımız yerde kullanacağımız fonksiyon yani app.js //
export const init = () => {

    console.log("Sunucuya baglaniliyor...");

    socket = io("http://localhost:3001", {
        transports: ["websocket"],
    });

    socket.on("connect", () =>
        console.log("Sunucuya baglanti basariyla gerceklesti.")
    )
}

// bir rengi input olarak alacak ve backend'e iletecek //
export const send = (color) => {
    socket.emit("newColor", color)
}

// herhangi bir client veri gönderdiği anda diğer client'larda kullanırız //
export const subscribe = (cb) => {
    socket.on("receive", (color) => {
        console.log(color);
        cb(color);
    })
}