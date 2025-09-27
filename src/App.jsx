import { Route, Routes } from "react-router-dom";
import { Hero, Navbar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
