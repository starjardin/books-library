import React from "react";
import { useFetchBooks } from "../hooks/useFetchBooks";

const HelloWorld: React.FC = () => {
  const { loading, error, data } = useFetchBooks();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Hello goes here and this is working</h1>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
};

export default HelloWorld;
