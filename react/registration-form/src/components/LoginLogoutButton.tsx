import React, { useState } from 'react';

const LoginLogoutButton: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return <button onClick={toggleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>;
};

export default LoginLogoutButton;
