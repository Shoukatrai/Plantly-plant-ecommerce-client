import { Route, Routes } from "react-router-dom";
import { Footer, Hero, Navbar } from "./components";
import { Category, Home, Login, Signup, SinglePlant } from "./pages";
import { Bounce, ToastContainer } from "react-toastify";
import UserRoutes from "./routes/userRoutes"; // <-- make sure this exists

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<UserRoutes />}>
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/plants/:id" element={<SinglePlant />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
