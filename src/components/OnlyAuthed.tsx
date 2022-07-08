import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
    children: any
}

const OnlyAuthed = ({ children }: Props) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('/v1/verify', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.err) {
                    localStorage.removeItem('token');
                    return navigate('/login');
                }
            }
            )
    }, [navigate]);

    return (
        <>
            {children}
        </>
    );

}


export default OnlyAuthed