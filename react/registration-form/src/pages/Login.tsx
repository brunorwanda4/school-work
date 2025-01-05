import React, { useState } from 'react';
import { useAuth } from '../context/authcontext';

interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { dispatch } = useAuth();
  const [formData, setFormData] = useState<User>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: { email: string; password: string }) =>
        u.email === formData.email && u.password === formData.password
    );

    if (!user) {
      setError('Invalid email or password.');
      return;
    }

    dispatch({ type: 'LOGIN', payload: { name: user.name, email: user.email } });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-base-300 p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-3xl font-bold">Login</h2>

        {error && <div className="alert alert-error shadow-lg">{error}</div>}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            className="input input-bordered"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            className="input input-bordered"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
