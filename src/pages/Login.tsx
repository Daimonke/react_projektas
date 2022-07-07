import { Button, CircularProgress, Divider, TextField, Typography } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
    setLoggedIn: (loggedIn: boolean) => void
}

const Login = ({ setLoggedIn }: Props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        fetch('/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.err) return alert(res.err)
                if (res.token) {
                    localStorage.setItem('token', res.token)
                    setLoggedIn(true)
                    navigate('/')
                }
            }
            )
            .finally(() => setLoading(false))
    }

    return (
        <div style={{ width: '100%' }} >
            <Typography variant='h2' textAlign='center'>Login</Typography>
            <Divider sx={{ m: 2 }} />
            <form style={{
                margin: '0 auto',
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                gap: 10
            }}
                onSubmit={handleLogin}>
                <TextField autoComplete='email' label='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
                <TextField autoComplete='current-password' label='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
                <Button type='submit' variant='contained' color='primary'>Login</Button>
                {loading ? <CircularProgress sx={{ margin: '0 auto', mt: 2 }} /> : null}
            </form>
        </div >
    )
}

export default Login