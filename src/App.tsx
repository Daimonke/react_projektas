import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Add from './pages/Add';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
      navigate('/')
    }
  }
    , []);
  return (
    <Container>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add" element={<Add />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
