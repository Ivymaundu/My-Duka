import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from './pages/Home.tsx';
// import Dashboard from "./pages/Dashboard";
import Protected from "./pages/ProtectedRoutes";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Logout from "./pages/logout";
import RegisterBusiness from "./pages/RegisterBusiness";
import RegisterUser from "./pages/RegisterUser";
import Checkout from "./pages/CheckOut.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (


    < Router >
    {<ToastContainer />}
    <Routes>
      
      <Route>
        <Route path="/login" element={< Login />} />
        <Route path="/register-business" element={< RegisterBusiness />} />
        <Route path="/" element={< RegisterUser />} />
        <Route element={<Protected />}>
          {/* <Route element={< Navbar />}> */}
          <Route path="/products" element={< Products />} />
          <Route path="/sales" element={< Sales />} />
          <Route path="/dashboard" element={< Home />} />
          <Route path="/checkout" element={< Checkout />} />
          <Route path="/logout" element={<Logout />} />

          {/* </Route> */}
        </Route>
      </Route>
      </Routes>
    </Router>

  )
}

export default App
