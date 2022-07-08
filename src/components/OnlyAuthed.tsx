import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
    children: any
}

const OnlyAuthed = ({ children }: Props) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) navigate('/login');
    }, [navigate]);

    return (
        <>
            {children}
        </>
    );

}


export default OnlyAuthed