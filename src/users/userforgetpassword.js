import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Userforgetpassword = () => {
    const navigate = useNavigate()
    const[email,setEmail] = useState("");
    const handlesubmit = ()=>{
        let emailData = JSON.parse(localStorage.getItem('checkUserLogin'))
        if(emailData.email === email){
            navigate('/otp')
            console.log(email);
        }
    }
    return (
        <div>
            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="">
                                <h2>FORGET PASSWORD</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item h4"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active h4">login</li>
                                    <li className="breadcrumb-item active h4">Forget Password</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <section className='py-5' style={{backgroundColor:'#f3f3f3'}}>
                <div className="container">
                  <div className="row ">
                  <div className="col-10 d-flex flex-column justify-content-center">
                        <h3 className='mb-3 text-dark'>Enter Email Address</h3>
                        <input type='text' onChange={(e)=>setEmail(e.target.value)} className='h3 my-3 w-75 rounded-2 py-4 px-4 ' placeholder=' Enter Your Email'/>
                       <button type='button' onClick={()=>handlesubmit()} className='  mt-3  h3 btn btn-solid w-25'>Submit</button>
                    </div>
                  </div>
                </div>
            </section>
        </div>
    )

    }
export default Userforgetpassword
