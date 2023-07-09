import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (credentials: UserCredentials) => void;
}

interface UserCredentials {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const credentials: UserCredentials = {
      email,
      password,
    };
    onLogin(credentials);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;


