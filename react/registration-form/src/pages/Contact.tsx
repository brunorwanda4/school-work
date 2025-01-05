import React, { useState } from 'react';
import { useAuth } from '../context/authcontext';

const Contact: React.FC = () => {
  const { state } = useAuth();
  const [contactInfo, setContactInfo] = useState({
    name: state.user?.name || '',
    email: state.user?.email || '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message Sent! Details: Name - ${contactInfo.name}, Email - ${contactInfo.email}, Message - ${contactInfo.message}`);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-base-300 p-6 rounded-lg shadow-md space-y-4"
      >
        {state.user ? (
          <h2 className="text-3xl font-bold">Hello, {state.user.name}! Contact Us</h2>
        ) : (
          <h2 className="text-3xl font-bold">Contact Us</h2>
        )}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            className="input input-bordered"
            value={contactInfo.name}
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
            value={contactInfo.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            name="message"
            className="textarea textarea-bordered"
            placeholder="Your message"
            onChange={handleChange}
            value={contactInfo.message}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
