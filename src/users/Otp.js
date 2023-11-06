import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom';

const Otp = () => {

    const[otp,SetOtp] = useState("");
    const navigate = useNavigate()
 
    const Otp = ()=>{
        let userdata = JSON.parse(localStorage.getItem('checkUserLogin'))
        let otp = Math.floor(Math.random()*1000);
        let obj = {
            otp: otp,
            email : userdata.email
        }
        localStorage.setItem("userOtp",JSON.stringify(obj));
        alert("Your OTP:-"+otp)
    }

    const handleSubmit =()=>{
        let storedOtp = JSON.parse(localStorage.getItem("userOtp"));
        if(otp == storedOtp.otp){
            navigate('/newpassword')
        }
        else{
            alert("Otp is not correct")
        }
    }
    useEffect(()=>{
        Otp()
    },[])
  return (
    <div>
    <div className="breadcrumb-section">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="">
                        <h2>OTP</h2>
                    </div>
                </div>
                <div className="col-sm-6">
                    <nav aria-label="breadcrumb" className="theme-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item h4"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active h4">login</li>
                            <li className="breadcrumb-item active h4">Forget Password</li>
                            <li className="breadcrumb-item active h4">Otp</li>
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
                <h3 className='mb-3 text-dark'>Enter Otp</h3>
                <input type='text' value={otp} onChange={(e)=>SetOtp(e.target.value)} className='h3 my-3 w-75 rounded-2 py-4 px-4 ' placeholder=' Enter Your Otp'/>
               <button type='button' onClick={()=>handleSubmit()} className='  mt-3  h3 btn btn-solid w-25'>Submit</button>
            </div>
          </div>
        </div>
    </section>
</div>
  )
}

export default Otp;
