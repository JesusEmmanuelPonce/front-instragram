import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import './RegisterForm.scss'

export default function RegisterForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
            username: ''
        },
        validationSchema: null,
        onSubmit: formValues => {
            console.log('enviando por formik')
            console.log(formValues)
        }
    })

    return (
        <>
            <h2 className="register-form-title">
                Registrate para ver fotos y videos de tus amigos
            </h2>
            <Form className="register-form" onSubmit={formik.handleSubmit}>
                <Form.Input onChange={formik.handleChange} type="text" name="name" placeholder="Nombre" />
                <Form.Input onChange={formik.handleChange} type="text" name="email" placeholder="Email" />
                <Form.Input onChange={formik.handleChange} type="password" name="password" placeholder="*****" />
                <Form.Input onChange={formik.handleChange} type="password" name="repeatPassword" placeholder="*****" />
                <Form.Input onChange={formik.handleChange} type="text" name="username" placeholder="Username" />
                <Button type="submit" className="btn-submit">
                    Registrarse
                </Button>
            </Form>
        </>
    )
}
