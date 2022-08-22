import './css/sb-admin-2.css';
import './App.css'
import Dashboard from './Dashboard';
// import Sidebar from './Sidebar';
// import Topbar from './Topbar';
import Products from './Proudcts';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import User from './User';
import Createuser from './Createuser';
import Portal from './Portal';
import Login from './Login';
import Createproduct from './Createproduct';
import UserView from './UserView';
import EditUser from './EditUser';
import Editproduct from './Editproduct';
import Productsview from './Productsview';



function App() {
  return (
    <BrowserRouter>

      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path='/portal' element={<Portal />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='users' element={<User />} />
          <Route path='users/:userid' element={<UserView/>}/>
          <Route path='create-user' element={<Createuser />} />
          <Route path='user/edit/:id' element={<EditUser />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productid' element={<Productsview/>}/>
          <Route path='create-product' element={<Createproduct />} />
          <Route path='products/editproduct/:id' element={<Editproduct />} />
        </Route>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
