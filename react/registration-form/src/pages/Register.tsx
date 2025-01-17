import React, { useState } from 'react';
import { useAuth } from '../context/authcontext';

interface User {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const { state, dispatch } = useAuth();
  const [formData, setFormData] = useState<User>({ name: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((user: User) => user.email === formData.email)) {
      setError('An account with this email already exists.');
      return;
    }

    const updatedUsers = [...users, formData];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    dispatch({ type: 'LOGIN', payload: { name: formData.name, email: formData.email } });
    setSuccessMessage('Registration successful! You are now logged in.');
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-base-300 p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-3xl font-bold">Register</h2>

        {error && <div className="alert alert-error shadow-lg">{error}</div>}
        {successMessage && <div className="alert alert-success shadow-lg">{successMessage}</div>}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            className="input input-bordered"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
        <button
          type="submit"
          className={`btn btn-primary w-full ${state.loading ? 'btn-disabled' : ''}`}
          disabled={state.loading}
        >
          {state.loading ? 'Loading...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
