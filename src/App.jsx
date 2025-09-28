import { Route, Routes } from "react-router-dom";
import { Hero, Navbar } from "./components";
import { Category, Home } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:id" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
