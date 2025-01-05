import React from 'react';
import { useAuth } from '../context/authcontext';

const About: React.FC = () => {
  const { state } = useAuth();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {state.user ? (
            <>
              <h1 className="text-5xl font-bold">Hello, {state.user.name}!</h1>
              <p className="py-6">
                Welcome to the About Us page. We're glad you're here. This section is tailored
                specifically for you. Feel free to explore our platform!
              </p>
            </>
          ) : (
            <h1 className="text-5xl font-bold">
              About Us
            </h1>
          )}
          <p>
            {!state.user ? (
              <>
                Please <span className="text-primary font-bold">register in</span> to access personalized features!
              </>
            ) : (
              "Thank you for being part of our community."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
