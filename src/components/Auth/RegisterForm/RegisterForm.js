import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
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
        validationSchema: Yup.object({
            name: Yup.string().required('Tu nombre es obligatorio'),
            username: Yup.string().matches(/^[a-zA-Z0-9-]*$/, 'El nombre del usuario no puede tener espacio').required('Username es obligatorio'),
            email: Yup.string().email('El email no es valido').required('Email es obligatorio'),
            password: Yup.string().required('Contraseña es obligatoria').oneOf([Yup.ref('repeatPassword')], 'Las contraseñas no coinciden'),
            repeatPassword: Yup.string().required('Contraseña obligatoria').oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
        }),
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
                <Form.Input onChange={formik.handleChange} error={formik.errors.name} type="text" name="name" value={formik.values.name} placeholder="Nombre" />
                <Form.Input onChange={formik.handleChange} error={formik.errors.username} type="text" name="username" value={formik.values.username} placeholder="Username" />
                <Form.Input onChange={formik.handleChange} error={formik.errors.email} type="text" name="email" value={formik.values.email} placeholder="Email" />
                <Form.Input onChange={formik.handleChange} error={formik.errors.password} type="password" name="password" value={formik.values.password} placeholder="*****" />
                <Form.Input onChange={formik.handleChange} error={formik.errors.repeatPassword} type="password" name="repeatPassword" value={formik.values.repeatPassword} placeholder="*****" />
                <Button type="submit" className="btn-submit">
                    Registrarse
                </Button>
            </Form>
        </>
    )
}
