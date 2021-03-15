import React from 'react'
import {useFormik} from 'formik';



const RegistrationForm = () => {
    // pass in initial values for form field
const formik = useFormik({
    initialValues:{
        name:'',
        email:'',
        phoneNumber:'',
        password:''
    }

}) 

    return(
        <div>
        <form>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
        <label htmlFor='phoneNumber'>PhoneNumber</label>
        <input type="number" id="phonenumber" name="phoneNumber" onChange={formik.handleChange} value={formik.values.phoneNumber}/>
        <label htmlFor='password'>Password</label>
        <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        <button>Register</button>
        </form>
        </div>
    )
    
    
}

export default RegistrationForm;