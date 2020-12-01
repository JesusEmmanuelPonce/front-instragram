import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import './RegisterForm.scss'

export default function RegisterForm() {

    const onSubmit = () => {
        console.log('Formulario enviado')
    }

    return (
        <>
            <h2 className="register-form-title">
                Registrate para ver fotos y videos de tus amigos
            </h2>
            <Form className="register-form" onSubmit={onSubmit}>
                <Form.Input type="text" name="name" placeholder="Nombre" />
                <Form.Input type="text" name="email" placeholder="Email" />
                <Form.Input type="password" name="password" placeholder="*****" />
                <Form.Input type="password" name="repeatPassword" placeholder="*****" />
                <Button type="submit" className="btn-submit">
                    Registrarse
                </Button>
            </Form>
        </>
    )
}
