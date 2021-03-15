import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";


const RegistrationForm = () => {
    // pass in initial values for form field

    
    // add yup to validate schema in form field
    const validationScheme  = Yup.object({
        name:Yup.string().required('Required'),
        email:Yup.string().email("invalid email format").required('Required'),
        phoneNumber:Yup.string().required('Required'),
        password:Yup.string().required('Required'),

    })
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            password: ''
        },

        onSubmit: values => {
            console.log("submit", values)
        },

        validate: values => {
            // values.name values.email ....
            // errors.name errors.email ....
            // errors.name ="Required"
            let errors = { // key must similiar to value objects
            }
            if (!values.name) {
                errors.name = "Required"
            }
            if (!values.email) {
                errors.email = "Required"
            }
            if (!values.phoneNumber) {
                errors.phoneNumber = "Required"
            }
            if (!values.password) {
                errors.password = "Required"
            }
            return errors
        },
 validationScheme
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

                <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email &&formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <label htmlFor='phoneNumber'>PhoneNumber</label>
                <input
                    type="number"
                    id="phonenumber"
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}

                <label htmlFor='password'>Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password &&formik.errors.password ? <div>{formik.errors.password}</div> : null}

                <button type="submit">Register</button>
            </form>
        </div>
    )


}

export default RegistrationForm;