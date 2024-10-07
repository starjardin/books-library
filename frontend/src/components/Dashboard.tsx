import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Welcome to our library</h2>
      <p>
        Please <button onClick={() => navigate("/signup")}>Sign up here</button>{" "}
        to read books
      </p>
      <p>
        Please <button onClick={() => navigate("/login")}>Login here</button> to
        read books
      </p>
    </div>
  );
}

export default Dashboard;
