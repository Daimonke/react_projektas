import { Button, CircularProgress, Divider, TextField, Typography } from '@mui/material'
import React, { FormEvent, useState } from 'react'

type Props = {}

const Add = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const resetInputs = () => {
        setTitle('');
        setDescription('');
    }

    const handleAdd = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true);
        fetch('/v1/content/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                title,
                description
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.err) return alert('Invalid title or description')
                alert('Skill added')
                resetInputs();
            }
            )
            .finally(() => setLoading(false))
    }

    return (
        <div style={{ width: '100%' }} >
            <Typography variant='h2' textAlign='center'>Add new skill</Typography>
            <Divider sx={{ m: 2 }} />
            <form style={{
                margin: '0 auto',
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                gap: 10
            }}
                onSubmit={handleAdd}>
                <TextField label='Title' type='text' onChange={(e) => setTitle(e.target.value)} />
                <TextField label='Description' type='text' onChange={(e) => setDescription(e.target.value)} />
                <Button type='submit' variant='contained' color='primary'>Add</Button>
                {loading ? <CircularProgress sx={{ margin: '0 auto', mt: 2 }} /> : null}
            </form>
        </div >
    )
}

export default Add