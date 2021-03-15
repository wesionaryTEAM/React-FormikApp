import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const RegistrationForm = () => {
    const paperStyle = { padding: '40px 20px', width: 250, margin: '20px auto' }
    const btnStyle = { marginTop: 10 }

    // set initial form state ...
    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
    }

    // Defining yup validation schema to validate 
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(6, " too short").required("Required"),
        email: Yup.string().email("You must enter valid email").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
        password: Yup.string().min(8, "Minimum characters should be 8").required('Required')
    })

    // handles submit: 
    const onSubmit = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        alert("Form is registerd...")

        // call reset form 
        props.resetForm()
    }
    return (
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='h6'>Register Here</Typography>
                    <Typography variant="caption"> Please fill the form to create an account</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} name='name' label='Name' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='name' />} required />

                            <Field as={TextField} name='email' label='Email' fullWidth
                                error={props.errors.email && props.touched.email}
                                helperText={<ErrorMessage name='email' />} required />

                            <Field as={TextField} name="phoneNumber" label='Phone Number' fullWidth
                                error={props.errors.phoneNumber && props.touched.phoneNumber}
                                helperText={<ErrorMessage name='phoneNumber' />} required />

                            <Field as={TextField} name='password' label='Password' type='password' fullWidth
                                error={props.errors.password && props.touched.password}
                                helperText={<ErrorMessage name='password' />} required />

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='secondary'>Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default RegistrationForm;