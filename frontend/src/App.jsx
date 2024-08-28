import BooksTable from "./components/BooksTable";
import { Header } from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <BooksTable books={[]} />
    </>
  );
};

export default App;
