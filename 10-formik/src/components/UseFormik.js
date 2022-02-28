// ********** useFormik ********** //

// import işlemi //
import { useFormik } from 'formik';

function UseFormik() {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            firstName: 'uygar',
            lastName: 'suslu',
            email: 'uygarsuslu@santsg.com',
            gender: 'male',
            hobies: [],
            country: 'Turkey',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* value vermezsek  initialValues içine yazdıklarımız ekranda gözükmez */}
                <label htmlFor="firstName">First Name</label>
                <input name="firstName" value={values.firstName} onChange={handleChange} />

                <br />
                <br />

                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" value={values.lastName} onChange={handleChange} />

                <br />
                <br />

                <label htmlFor="email">Email</label>
                <input name="email" type="email" value={values.email} onChange={handleChange} />

                <br />
                <br />

                {/* // RADIO // */}

                <span>Male</span>
                <input type="radio" name='gender' value="male" onChange={handleChange} checked={values.gender === "male"} />

                <span>Female</span>
                <input type="radio" name='gender' value="female" onChange={handleChange} checked={values.gender === "female"} />
                {/* checked = sayfa yenilendiğinde seçili gelmesini sağlar */}

                <br />
                <br />

                {/* // CHECKBOX // */}

                {/* handleChange vermezsek yapılan değişikliği ekranda göremeyiz */}
                <div>
                    <input type="checkbox" name="hobies" value="Football" onChange={handleChange} /> Football
                </div>

                <div>
                    <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange} /> Cinema
                </div>

                <div>
                    <input type="checkbox" name="hobies" value="Photography" onChange={handleChange} /> Photography
                </div>

                <br />
                <br />

                {/* // DROPDOWN // */}

                <select name='country' value={values.country} onChange={handleChange}>
                    <option value="turkey">Turkey</option>
                    <option value="england">England</option>
                    <option value="usa">USA</option>
                </select>

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

export default UseFormik;