import { Button, CircularProgress, Divider, TextField, Typography } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const Signup = (props: Props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true);
        fetch('/v1/auth/register', {
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
                if (res.changes === 1) return navigate('/login')
                alert('Invalid email or password')
            }
            )
            .finally(() => setLoading(false))
    }
    return (
        <div style={{ width: '100%' }} >
            <Typography variant='h2' textAlign='center'>Sign-up</Typography>
            <Divider sx={{ m: 2 }} />
            <form style={{
                margin: '0 auto',
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                gap: 10
            }}
                onSubmit={handleSignup}>
                <TextField autoComplete='email' label='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
                <TextField autoComplete='current-password' label='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
                <Button type='submit' variant='contained' color='primary'>Sign-up</Button>
                {loading ? <CircularProgress sx={{ margin: '0 auto', mt: 2 }} /> : null}
            </form>
        </div >
    )
}

export default Signup