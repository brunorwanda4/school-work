import React, { useState } from 'react';
import { useAuth } from '../context/authcontext';

const Register: React.FC = () => {
  const { dispatch } = useAuth();
  const [formData, setFormData] = useState<{ name: string; email: string; password: string }>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password.length >= 8) {
      dispatch({ type: 'LOGIN', payload: { name: formData.name, email: formData.email } });
      alert('Registration successful!');
    } else {
      alert('Please fill in valid details.');
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 bg-base-300 p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-3xl font-bold">Register</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            className="input input-bordered"
            placeholder="Name"
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
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
