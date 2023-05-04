import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    if (email === 'parth@yopmail.com' && password === '123456'){
      localStorage.setItem('loggedIn', true);
      navigate('/dashboard');
      window.location.reload();
    }else {

    }
  };
  useEffect(() => {
      setIsDisabled(email === '' || password === '')
  });


  return (
    <form className={'form-container'} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className={isDisabled ? 'disabled' : ''}>Login</button>
    </form>
  );
}
