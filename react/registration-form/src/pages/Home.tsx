import React from 'react';
import profileImg from "../assets/p.jpg";
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="hero bg-base-100 py-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={profileImg}
            alt="Placeholder"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="lg:ml-10 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome to Our Platform!</h1>
            <p className="py-6">
              Join our growing community to explore exciting features and unlock endless possibilities. 
              Register today and become part of something amazing.
            </p>
            <Link to={"/register"}><button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-base-200">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Personalized Experience</h3>
              <p>
                Enjoy a platform tailored to your needs, where every feature is designed to benefit you.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">24/7 Support</h3>
              <p>
                We’re here for you anytime, anywhere. Our team of experts is always ready to assist you.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Easy to Use</h3>
              <p>
                Our intuitive design ensures you have a seamless experience navigating through our features.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Secure Platform</h3>
              <p>
                Security is our top priority. Your data and privacy are always protected.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Regular Updates</h3>
              <p>
                Stay ahead with frequent updates and new features that enhance your experience.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Community Support</h3>
              <p>
                Join our vibrant community and connect with like-minded individuals who share your passion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-content py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Create an account today and take the first step towards your exciting journey with us!
        </p>
        <button className="btn btn-secondary btn-lg">Join Now</button>
      </div>
    </div>
  );
};

export default Home;
