import { Route, Routes } from "react-router-dom";
import { Hero, Navbar } from "./components";
import { Category, Home, Login, Signup } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories/:id" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
