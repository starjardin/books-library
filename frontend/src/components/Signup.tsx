import React, { useState } from "react";
import { useSignupMutation } from "../generated/graphql";
import { Link, useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [onSignup, { data, loading, error }] = useSignupMutation();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSignup({
      variables: {
        input: {
          email,
          username: name,
          password,
        },
      },
    });
  };

  if (loading) {
    return <h2>Loading......</h2>;
  }

  if (error) {
    navigate("/signup/error");
  }

  if (data) {
    navigate("/login");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-grey-lighter flex flex-col">
        <div className="container absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <Link
                className="no-underline border-b border-grey-dark text-grey-dark"
                to="/"
              >
                Terms of Service
              </Link>
              and
              <Link
                className="no-underline border-b border-grey-dark text-grey-dark"
                to="/"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/login"
            >
              {" "}
              Log in{" "}
            </Link>
            .
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
