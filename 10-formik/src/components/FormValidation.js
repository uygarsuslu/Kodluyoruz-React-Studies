import { useFormik } from 'formik';

import Validations from "./Validations";

function Formvalidasyonu1() {
    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Validations,
        // validationSchema ismiyle import etseydik doğrudan validationSchema olarak kullanabilirdik//
    });

    return (
        <div >
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                {/* value vermezsek  initialValues içine yazdıklarımız ekranda gözükmez */}
                <label>Email: </label>
                <input name="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />

                {errors.email && touched.email && <div className='error'>{errors.email}</div>}

                <br />
                <br />

                <label>Password: </label>
                <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />

                {errors.password && touched.password && <div className='error'>{errors.password}</div>}

                <br />
                <br />

                <label>Confirm Password: </label>
                <input name="passwordConfirm" value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur} />

                {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}

                <br />
                <br />

                <button type="submit">Submit</button>

                <br />
                <br />

                {/* anlık olarak yaptığımız değişiklikleri ekranda gösterir */}
                <code>{JSON.stringify(values)}</code>

            </form>
        </div >
    );
}

export default Formvalidasyonu1;