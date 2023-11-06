import React from 'react'

import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './admin.css'
import AdminFooter from './AdminFooter'
// import './assets/css/vendors/font-awesome.css'
// import '../assets/css/vendors/font-awesome.css';
// import './assets/css/vendors/slick.css';
// import './assets/css/vendors/slick-theme.css';
// import './assets/css/vendors/animate.css';
// import './assets/css/vendors/themify-icons.css';
// import './assets/css/vendors/bootstrap.css';
// import './assets/css/style.css';

const AdminLayout = () => {
    return (

        <>
            <div className='contanier-fluid d-flex  px-0 text-white ' >
                <div className='col-2 text-center bg-dark  px-4'    >
                    <img src="https://themes.pixelstrap.com/multikart/back-end/assets/images/dashboard/multikart-logo.png" className='py-4' alt='logo' />

                    <div className='sidebar-user d-flex align-items-center my-3 px-2'>
                        <div className='logo'>
                            <img className="img-60"  src='https://themes.pixelstrap.com/multikart/back-end/assets/images/dashboard/user3.jpg'></img>
                        </div>
                        <div className='text-start ps-4 mt-3'>
                            <h4 className='m-0 text-danger '>JOHN</h4>
                            <p className='mt-2 text-white h5'>general manager.</p>
                        </div>
                    </div>


                    <ul className='py-3  ms-2 text-start d-flex flex-column list-unstyled px-2'>
                        <li className='my-2'>
                            <NavLink  className = "text-white h5 " to={`/admin/dashboard`}>
                                <div>Dashboard</div>
                            </NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink className = "text-white h5" to={`/admin/user`}>
                                <div >User</div>
                            </NavLink>
                        </li>
                   
                        
                        <li className='my-2'>
                            <NavLink className = "text-white h5" to={`/admin/category`}>
                                <div>Category</div>
                            </NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink className = "text-white h5" to={`/admin/adminslider`}>
                                <div>Slider</div>
                            </NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink className = "text-white h5" to={`/admin/product`}>
                                <div >Product</div>
                            </NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink className = "text-white h5" to={`/admin/viewproduct`}>
                                <div >View Product</div>
                            </NavLink>
                        </li>
                        
                        <li className='my-2'>
                            <NavLink className = "text-white h5" to={`/admin/contact`}>
                                <div >Contact Detail</div>
                            </NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink className = "text-white h5" to={`/admin/adminprofile`}>
                                <div >Profile</div>
                            </NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink className = "text-white h5 " to={`/userforgetpassword`}>
                                <div >Forget password</div>
                            </NavLink>
                        </li>




                    </ul>
                </div>


                <div className='col-10 bg-white text-black'>
                    <div className='row'>
                        <div className='page-main-header'>
                          <Outlet />
                        </div>
                    </div>

                    <AdminFooter/>
                </div>

            </div> 
 



        </>

    )
}

export default AdminLayout