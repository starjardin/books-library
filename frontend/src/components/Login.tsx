import React, { useState } from "react";
import { useLoginMutation } from "../generated/graphql";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [onLogin, { data, loading, error }] = useLoginMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
  };

  if (loading) {
    return <h2>Loading......</h2>;
  }

  if (error) {
    navigate("/login/error");
  }

  if (data) {
    localStorage.setItem("token", data.login.token);
    navigate("/");
    return <h2>Logged in successfully</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-grey-lighter flex flex-col">
        <div className="container absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign in</h1>
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
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

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Sign in
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
            Don't' have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/signup"
            >
              {" "}
              Register{" "}
            </Link>
            .
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
