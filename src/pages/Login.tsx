import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

type Props = {}

const Login = (props: Props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    }

    return (
        <div style={{ width: '100%' }} >
            <form style={{
                margin: '0 auto',
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                gap: 10
            }}
                onSubmit={handleLogin}>
                <TextField label='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
                <TextField label='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
                <Button type='submit' variant='contained' color='primary'>Login</Button>
            </form>
        </div >
    )
}

export default Login