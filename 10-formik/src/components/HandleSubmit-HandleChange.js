// ********** handleSubmit & handleChange ********** 

// formik'in vermiş olduğu Form ve Field componentlerini kullanmak yerine html'deki form ve input'u kullandık //

// import işlemi //
import { Formik } from 'formik';

function Handle() {
    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={async (values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {
                    ({ handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>

                            <label htmlFor="firstName">First Name</label>
                            <input name="firstName" onChange={handleChange} />

                            <br />

                            <label htmlFor="lastName">Last Name</label>
                            <input name="lastName" onChange={handleChange} />

                            <br />

                            <label htmlFor="email">Email</label>
                            <input name="email" type="email" onChange={handleChange} />

                            <br />

                            <button type="submit">Submit</button>

                        </form>
                    )
                }
            </Formik>
        </div>
    );
}

export default Handle;