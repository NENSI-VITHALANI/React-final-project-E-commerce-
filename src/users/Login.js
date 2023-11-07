import axios from 'axios';
import React, { useState } from 'react'
import { NavLink,Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async() => {

       try{
        let users = await axios.get(`http://localhost:8000/users?email=${email}&password=${password}`);

       if(users.data.length === 0){
                console.log("Email and Password not valid");
                return false;
                navigate('/')
                
       }
       localStorage.setItem('checkUserLogin',JSON.stringify(users.data[0]));
       setEmail("");
       setPassword("");
        navigate('/');

       }catch(err){
        console.log(err);
        return false;
       }
    }

    const forgetPassword = ()=>{

    }
    return (
        <>

<div className="breadcrumb-section">
  <div className="container">
    <div className="row">
      <div className="col-sm-6">
        <div className="page-title">
          <h2>customer's login</h2>
        </div>
      </div>
      <div className="col-sm-6">
        <nav aria-label="breadcrumb" className="theme-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">login</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>

<section className="login-page section-b-space">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <h3>Login</h3>
        <div className="theme-card">
          <form className="theme-form">
            <div className="form-group " >
              <label htmlFor="email" style={{fontSize:'16px'}}> Email</label>
              <input type="text" name='email' onChange={ (e) => setEmail(e.target.value) } value={email}  style={{fontSize:'16px'}} className="form-control" id="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="review" style={{fontSize:'16px'}}>Password</label>
              <input type="password" name='password' onChange={ (e) => setPassword(e.target.value) } value={password} style={{fontSize:'16px'}} className="form-control" id="review" placeholder="Enter your password" required />
            </div><div type="button" onClick={ () => handleSubmit() } className="btn btn-solid">Login</div>
     <NavLink to ={ `/userforgetpassword`}>        <div type="button"  className="btn ms-2 btn-solid">Forget Password</div></NavLink>
          </form>
        </div>
      </div>
      <div className="col-lg-6 right-login">
        <h3>New Customer</h3>
        <div className="theme-card authentication-right">
          <h6 className="title-font ">Create A Account</h6>
          <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
            able to order from our shop. To start shopping click register.</p><div className="btn btn-solid"> <NavLink to='/register' className="text-white">Create an Account</NavLink></div>
        </div>
      </div>
    </div>
  </div>
</section>


        
        </>
    )
}

export default Login