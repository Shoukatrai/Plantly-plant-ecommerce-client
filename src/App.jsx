import { Route, Routes } from "react-router-dom";
import {
  Category,
  Home,
  Login,
  SellerDashboard,
  Signup,
  SinglePlant,
} from "./pages";
import { Bounce, ToastContainer } from "react-toastify";
import UserRoutes from "./routes/userRoutes";
import SellerCategory from "./pages/seller/SellerCategory";
import SellerOrders from "./pages/seller/SellerOrders";
import SellerPlants from "./pages/seller/SellerPlants.jsx";
import SellerClients from "./pages/seller/SellerClients";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserRoutes />}>
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/plants/:id" element={<SinglePlant />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seller_dashboard" element={<SellerDashboard />} />
        <Route path="/seller_categories" element={<SellerCategory />} />
        <Route path="/seller_orders" element={<SellerOrders />} />
        <Route path="/seller_plants" element={<SellerPlants />} />
        <Route path="/seller_clients" element={<SellerClients />} />
      </Routes>
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
