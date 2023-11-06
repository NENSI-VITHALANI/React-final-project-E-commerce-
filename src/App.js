import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './users/Home';
import Product from './users/Product';
import ProductDetails from './users/Productdetail';
import Login from './users/Login';
import Register from './users/Register';
import Cart from './users/cart';
import Contact from './users/contact';
import UserData from './users/Userdata';
import Userforgetpassword from './users/userforgetpassword';
import Otp from './users/Otp';
import Newpassword from './users/Newpassword';

import AdminLogin from './admin/pages/AdminLogin';
import AdminRegister from './admin/pages/AdminRegister';
import AdminLayout from './admin/component/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminProduct from './admin/pages/AdminProduct';
import AdminCategory from './admin/pages/AdminCategory';
import AdminViewProduct from './admin/pages/AdminViewProduct';
import AdminContact from './admin/pages/AdminContact';
import User from './admin/pages/user';
import UserDetails from './admin/pages/UserDetails';
import AdminProfile from './admin/pages/AdminProfile';
import AdminSlider from './admin/pages/AdminSlider';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product_details/:productId' element={<ProductDetails />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/userdata' element={<UserData />}></Route>
          <Route path ='/userforgetPassword' element={<Userforgetpassword />}></Route>
          <Route path='/otp' element={<Otp />}></Route>
          <Route path ='/newpassword' element={<Newpassword />}></Route>

          {/* /*login and register */}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Route>


        <Route element={<AdminLayout />}>

          <Route path='/admin/dashboard' element={<AdminDashboard />}></Route>
          <Route path='/admin/contact' element={<AdminContact />}></Route>
          <Route path='/admin/category' element={<AdminCategory />}></Route>
          <Route path='/admin/product' element={<AdminProduct />}></Route>
          <Route path='/admin/viewproduct' element={<AdminViewProduct />}></Route>
          <Route path='/admin/user' element={<User />}></Route>
          <Route path='/admin/userdetail/:userid' element={<UserDetails />}></Route>
           <Route path = '/admin/adminprofile' element={<AdminProfile />}></Route>
           <Route path = '/admin/adminSlider' element={<AdminSlider/>}></Route>
   
        </Route>

         <Route path='/admin' element={<AdminLogin />}></Route> 
        <Route path='/admin/register' element={<AdminRegister />}></Route> 
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
