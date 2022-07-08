import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
    loggedIn: boolean
    setLoggedIn: (loggedIn: boolean) => void
}

const Header = ({ loggedIn, setLoggedIn }: Props) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
        navigate('/login');
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10, gap: 10 }}>
            <Link to='/'>
                <img alt='logo' src='https://cryptologos.cc/logos/stellar-xlm-logo.png' width={100} />
            </Link>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {loggedIn ?
                    <>
                        <Link to='/'>
                            <Button variant='contained' color='primary'>Home</Button>
                        </Link>
                        <Link to='/add'>
                            <Button variant='contained' color='primary'>Add</Button>
                        </Link>
                        <Button variant='contained' color='error' onClick={handleLogout}>Logout</Button>
                    </> :
                    <>
                        <Link to='/login'>
                            <Button variant='contained' color='primary'>Login</Button>
                        </Link>
                        <Link to='/signup'>
                            <Button variant='contained' color='info'>Sign-up</Button>
                        </Link>
                    </>}
            </div>
        </div>
    )
}

export default Header