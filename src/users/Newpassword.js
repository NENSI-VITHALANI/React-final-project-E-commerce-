import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Newpassword = () => {
    const navigate = useNavigate();
  const[password,Setpassword] = useState("");
  const[confirmpassword,SetConfirmpassword] = useState("");
  const handleSubmit =()=>{
   let admindata = JSON.parse(localStorage.getItem('checkUserLogin'));
    if(password===confirmpassword){
        axios.patch(`http://localhost:8000/users/${admindata.id}`,{
            password:password
        }).then((res)=>{
            localStorage.setItem('checkUserLogin',JSON.stringify(res.data));
            navigate('/login');
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }
    else{
        alert("password do not match");
    }
   
  }
  return (
    <div>
    <div className="breadcrumb-section">
        <div className="container p-0">
            <div className="row align-items-center">
                <div className="col-sm-6">
                    <div className="">
                        <h2 className='m-0'>Change password</h2>
                    </div>
                </div>
                <div className="col-sm-6">
                    <nav aria-label="breadcrumb" className="theme-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item h4"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active h4">Newpassword</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div style={{backgroundColor:'#ffff'}}>
        <div className="container">
          <div className="row ">
          <div className="col-10 d-flex flex-column justify-content-center">
                <h3 className='mb-3 text-dark'>Enter Password</h3>
                <input type='text' value={password} onChange={(e)=>Setpassword(e.target.value)} className='h3 my-3 w-75 rounded-2 py-4 px-4 ' placeholder=' Enter Your Password'/>
                <h3 className='my-3 text-dark'>Enter  Confirm Password</h3>
                <input type='text' value={confirmpassword} onChange={(e)=>SetConfirmpassword(e.target.value)} className='h3  w-75 rounded-2 py-4 px-4 ' placeholder=' Enter Your Confirm Password'/>
               <button type='button' onClick={()=>handleSubmit()} className='  mt-3  h3 btn btn-solid w-25'>Submit</button>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default Newpassword;

