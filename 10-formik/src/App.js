import './App.css';

// ********** KURULUM ********** //

// npm install formik --save

// import işlemi //
// import { Formik, Field, Form } from 'formik';

// function App() {
//   return (
//     <div className="App">
//       <h1>Sign Up</h1>
//       <Formik
//         initialValues={{
//           firstName: '',
//           lastName: '',
//           email: '',
//         }}
//         onSubmit={async (values) => {
//           alert(JSON.stringify(values, null, 2));
//         }}
//       >
//         <Form>

//           <label htmlFor="firstName">First Name</label>
//           <Field name="firstName" placeholder="Jane" />
//           <br />
//           <label htmlFor="lastName">Last Name</label>
//           <Field name="lastName" placeholder="Doe" />
//           <br />
//           <label htmlFor="email">Email</label>
//           <Field
//             name="email"
//             placeholder="jane@acme.com"
//             type="email"
//           />
//           <br />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

/* ******************************************************************************************************* */

// ********** handleSubmit & handleChange ********** //

// import Handle from './components/HandleSubmit-HandleChange';

// function App() {
//     return (
//         <div className="App">
//             <Handle />
//         </div>
//     );
// }
// export default App;

/* ******************************************************************************************************* */

// ********** RADIO / CHECKBOX / DROPDOWN ********** //

// import Radio from './components/Radio-Checkbox-Dropdown';

// function App() {
//     return (
//         <div className="App">
//             <Radio />
//         </div>
//     );
// }
// export default App;

/* ******************************************************************************************************* */

// ********** useFormik ********** //

// import UseFormik from './components/UseFormik';

// function App() {
//     return (
//         <div className="App">
//             <UseFormik />
//         </div>
//     );
// }
// export default App;

/* ******************************************************************************************************* */

// ********** FORM VALİDASYONLARI 1 ********** //

import Formvalidasyonu1 from "./components/Formvalidasyonu1";

// npm install - S yup

function App() {
    return (
        <div className="App">
            <Formvalidasyonu1 />
        </div>
    );
}
export default App;
