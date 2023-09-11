import React, { useEffect, useState } from 'react';
import Portal from './components/portal';
import Title from '../../components/title'
import Theme from './components/theme';
import { Box } from '@mui/material';
function Index() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    useEffect(() => {
      const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
      if (storedLoggedInStatus === 'true') {
        setIsLoggedIn(true);
      }
    }, []);
  
    const handleLogin = (event) => {
      event.preventDefault();
  
      // ตรวจสอบการเข้าสู่ระบบ
      if (username === 'admin' && password === 'admin') {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid username or password');
      }
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
      localStorage.setItem('isLoggedIn', 'false');
      setUsername('');
      setPassword('');
    };
  
    if (isLoggedIn) {
      return (
        <div>
          <Title namepage="Admin" company="Authweiler"/>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          <Box sx={{mx:5}}>
            <Portal />
          </Box>
          <Box sx={{mx:5,mb:5}}>
            <Theme/>
          </Box>
          <style jsx>{`
            .logout-button {
              position: absolute;
              top: 10px;
              right: 10px;
            }
          `}</style>
        </div>
      );
    }

  return (
    <div className="login-form">
    <Title namepage="Admin" company="Authweiler"/>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username}onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <style jsx>{`
        .login-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        label {
          display: block;
        }
        input {
          width: 100%;
          padding: 0.5rem;
        }
        button {
          padding: 0.5rem 1rem;
        }
        .error-message {
          color: red;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}

export default Index;
