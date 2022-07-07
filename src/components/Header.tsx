import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { context } from '../App';

type Props = {}

const Header = (props: Props) => {

    const { token } = useContext(context);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
            <Link to='/'>
                <img alt='logo' src='https://cryptologos.cc/logos/stellar-xlm-logo.png' width={100} />
            </Link>
            <div style={{ display: 'flex', gap: 10 }}>
                {token ?
                    <>
                        <Link to='/'>
                            <Button variant='contained' color='primary'>Home</Button>
                        </Link>
                        <Link to='/login'>
                            <Button variant='contained' color='primary'>Add</Button>
                        </Link>
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