import { Container } from '@mui/material';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

export const context = createContext({
  token: null,
  setToken: () => { },
});

function App() {

  const { Provider } = context;


  return (
    <Provider value={{
      token: null,
      setToken: () => { },
    }}>
      <Container>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Provider>
  );
}

export default App;
