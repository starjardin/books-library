import React from "react";
import { useNavigate } from "react-router-dom";

function LoginError() {
  const navigate = useNavigate();
  return (
    <>
      <h2>There was an error while logging in</h2>
      <p>
        Please <button onClick={() => navigate("/login")}>Try again</button>
      </p>
    </>
  );
}

export default LoginError;
