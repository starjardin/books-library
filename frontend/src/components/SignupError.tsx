import React from "react";
import { useNavigate } from "react-router-dom";

function SignupError() {
  const navigate = useNavigate();
  return (
    <>
      <h2>There was an error while signin up</h2>
      <p>
        Please <button onClick={() => navigate("/signup")}>Try again</button>
      </p>
    </>
  );
}

export default SignupError;
