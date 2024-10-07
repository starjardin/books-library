import React, { useState } from "react";
import { useLoginMutation } from "../generated/graphql";
import { useNavigate } from "react-router-dom";

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
    return <h2>Error</h2>;
  }

  if (data) {
    localStorage.setItem("token", data.login.token);
    navigate("/");
    return <h2>Logged in successfully</h2>;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
