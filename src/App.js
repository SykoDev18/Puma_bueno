import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboards";
import Login from "./components/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import BuyProduct from "./pages/BuyProduct";
import Resgistro from "./components/Register";
import Categorias from "./pages/Categories";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/dashboard" element={<Dashboard />} />  
          <Route path="/users" element={<Users />} />  
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/products/buy/:id" element={<BuyProduct />} />
          <Route path="/users/registro" element={<Resgistro />} />
          <Route path="/categorias" element={<Categorias />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
