import React, { useState } from "react";
import { useSignupMutation } from "../generated/graphql";
import { useNavigate } from "react-router-dom";

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
    return (
      <h2>
        <span>Error</span>
        <button onClick={() => navigate("/login")}>Try again</button>
      </h2>
    );
  }

  if (data) {
    navigate("/signin");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
