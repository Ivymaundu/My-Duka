import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Protected from "./pages/ProtectedRoutes";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Logout from "./pages/logout";
import RegisterBusiness from "./pages/RegisterBusiness";
import RegisterUser from "./pages/RegisterUser";
import Checkout from "./pages/CheckOut.tsx";


function App() {

  return (
    <Routes>

      <Route path="/login" element={< Login />} />
      <Route path="/" element={< RegisterBusiness />} />
      <Route path="/register-user" element={< RegisterUser />} />
      <Route element={<Protected />}>
        <Route element={< Navbar />}>
          <Route path="/products" element={< Products />} />
          <Route path="/sales" element={< Sales />} />
          <Route path="/dashboard" element={< Dashboard />} />
          <Route path="/checkout" element={< Checkout />} />
          <Route path="/logout" element={<Logout />} />

        </Route>

      </Route>
    </Routes>
  )
}

export default App
