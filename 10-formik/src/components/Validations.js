import { object, string, ref } from 'yup';

// initial values kısmında verdiğimiz keyler ne ise burdada onu vermeliyiz password ise burdada password böylece eşleşiyor //
// required = bunu yaparak boş bırakmamasını sağlıyoruz //
// oneOf([ref("")]) = şifreleri eşleştirme yapıyor //
// email ve required içine özel mesajlar verebiliriz //

const Validations = object({
    email: string().email("email must be a valid email").required("required field"),
    password: string().min(5, "password must be at least 5 characters").required("password is a required field"),
    passwordConfirm: string().oneOf([ref("password")], "passwords do not match").required("passwordConfirm is a required field"),
});

export default Validations;