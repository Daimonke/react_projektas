import { CircularProgress, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Skills = {
    id: number;
    title: string;
    description: string;
    user_id: number;
}

const Home = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [skills, setSkills] = useState<Skills[]>([]);

    const token = localStorage.getItem('token')


    useEffect(() => {
        if (!token) return navigate('/login');
        fetch('/v1/content/skills', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.err) return navigate('/login');
                setSkills(res);
            })
            .finally(() => setLoading(false));
    }
        , [token, navigate]);

    return (
        <div>
            {loading ?
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: 100 }}>
                    <CircularProgress />
                </div> :
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat( auto-fill, minmax(300px, 1fr) )',
                    gap: 15,
                }}>
                    {skills.map(skill =>
                        <div key={skill.id} style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: 30,
                            borderRadius: 10,
                            boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
                            border: '1px solid white',
                        }}>
                            <Typography sx={{ wordBreak: 'break-word' }} variant='h3'>{skill.title}</Typography>
                            <Divider sx={{ backgroundColor: 'white', mt: 1, mb: 2 }} />
                            <Typography variant='body1'>{skill.description}</Typography>
                        </div>
                    )}
                </div>}

        </div>
    )
}

export default Home

