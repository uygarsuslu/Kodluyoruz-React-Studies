import { object, string, number, date, InferType, ref, ValidationError } from 'yup';

// initial values kısmında verdiğimiz keyler ne ise burdada onu vermeliyiz password ise burdada password böylece eşleşiyor //
// required = bunu yaparak boş bırakmamasını sağlıyoruz //
// oneOf([ref("")]) = şifreleri eşleştirme yapıyor //
// email ve required içine özel mesajlar verebiliriz //

const Validations = object({
    email: string().email("Geçerli bir email girin").required("Zorunlu Alan"),
    password: string().min(5, "Parolanız en az 5 karekter olmalıdır.").required("Zorunlu Alan"),
    passwordConfirm: string().oneOf([ref("password")], "Parolalar uyuşmuyor").required("Zorunlu Alan"),
});

export default Validations;