import BooksTable from "./components/BooksTable";
import { Header } from "./components/Header";
import Dashboard from "./components/Dashboard";
import { jwtDecode } from "jwt-decode";

function isTokenExpired(token) {
  try {
    const decoded = jwtDecode(token);
    if (decoded.exp) {
      const currentTime = Date.now() / 1000;
      return decoded.exp < currentTime;
    } else {
      return false;
    }
  } catch (error) {
    // The below code is intended
    console.error("Invalid token", error);
    return true;
  }
}

const App = () => {
  const isAuthenticated = !isTokenExpired(localStorage.getItem("token"));

  return isAuthenticated ? (
    <>
      <Header />
      <BooksTable books={[]} />
    </>
  ) : (
    <>
      <Header />
      <Dashboard />
    </>
  );
};

export default App;
