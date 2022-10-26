import './App.css';
import Login from './Components/Login';
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Buttons from './Components/Buttons';
import Cards from './Components/Cards';
import Colors from './Components/Colors';
import Borders from './Components/Borders';
import Animations from './Components/Animations';
import Other from './Components/Other';
import Tables from './Components/Tables';
import Charts from './Components/Charts';
import Register from './Components/Register';
import ForgetPass from './Components/ForgetPass';
import Page404 from './Components/404page';
import Blankpage from './Components/Blankpage';
import User from './Components/User';
import CreateUser from './Components/CreateUser';
import UserView from './Components/UserView';
import EditUser from './Components/EditUser';
import Products from './Components/Products';
import CreateProduct from './Components/CreateProduct';
import ProductView from './Components/ProductView';
import EditProduct from './Components/EditProduct';




function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/button" element={<Buttons/>} />
    <Route path="/cards" element={<Cards/>} />
    <Route path="/colors" element={<Colors/>} />
    <Route path="/borders" element={<Borders/>} />
    <Route path="/animations" element={<Animations/>} />
    <Route path="/other" element={<Other/>} />
    <Route path="/tables" element={<Tables/>} />
    <Route path="/charts" element={<Charts/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/forgotpass" element={<ForgetPass/>} />
    <Route path="/404page" element={<Page404/>} />
    <Route path="/blankpage" element={<Blankpage/>} />
    <Route path="/user" element={<User/>} />
    <Route path="/createuser" element={<CreateUser/>}/>
    <Route path='user/:userid' element={<UserView/>}/>
    <Route path='user/edituser/:id'element={<EditUser />} />
    <Route path="/products" element={<Products/>} />
    <Route path="/createproduct" element={<CreateProduct/>}/>
    <Route path='products/:productid' element={<ProductView/>}/>
    <Route path='products/editproduct/:id'element={<EditProduct />} />

    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
