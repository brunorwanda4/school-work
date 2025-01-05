import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { useAuth } from "./context/authcontext";
import Login from "./pages/Login";

const App: React.FC = () => {
  const { state, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "SET_LOADING", payload: true }); // Start loading
    setTimeout(() => {
      dispatch({ type: "LOGOUT" }); // Logout after a delay
    }, 2000); // Simulated 2-second delay
  };

  return (
    <Router>
      <div className="navbar bg-base-100  fixed w-full z-10 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">🫡</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {state.user ? (
            <button
              className={`btn btn-error ${state.loading ? "btn-disabled" : ""}`}
              onClick={handleLogout}
              disabled={state.loading}
            >
              {state.loading ? "Loading..." : "Logout"}
            </button>
          ) : (
            <div className=" space-x-2">
              <Link to={"/login"} className=" btn btn-info">Login</Link>
              <Link to={"/register"} className=" btn btn-primary">Register</Link>
            </div>
          )}
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
