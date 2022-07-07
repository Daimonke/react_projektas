import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { context } from '../App';

type Props = {}

const Home = (props: Props) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    // use context
    const { token } = useContext(context);


    useEffect(() => {
        if (!token) return navigate('/login');
        setLoading(false);
    }
        , [token, navigate]);

    return (
        <div>
            {loading ?
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: 100 }}>
                    <CircularProgress />
                </div> :
                <div>
                    Home
                </div>}

        </div>
    )
}

export default Home

