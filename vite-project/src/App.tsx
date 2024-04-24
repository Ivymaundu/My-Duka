import { Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import MyAccount from "./pages/MyAccount";
import Dashboard from "./pages/Dashboard";
import Protected from "./pages/ProtectedRoutes";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Logout from "./pages/logout";
import Register from "./pages/Register";



function App(){

 

  return (
    <Routes>
      
      <Route element={< Layout/>}>
      
        <Route path="/" element={< Home />} />
        <Route path="/about" element={<  About />}/>
        <Route path="/myaccount" element={< MyAccount />} />
        <Route path="/register" element={< Register />} />
       
        
      </Route>
      <Route element={<Protected/>}>
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/products" element={< Products />} />
        <Route path="/sales" element={< Sales />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
      
    
      
    </Routes>
  )
}

export default App
