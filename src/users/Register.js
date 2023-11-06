import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[lastname,setLastName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {

        let usersrecord = axios.post(`http://localhost:8000/users`, {
            name: name,
            email: email,
            lastname:lastname,
            password: password
        });

        if (usersrecord) {
          alert("User successfully register");
            setName("");
            setEmail("");
            setLastName("");
            setPassword("");

        } else {
           alert("User not Register");
            return false;
        }
    }


    return (
        <>

            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="page-title">
                                <h2>create account</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">create account</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


<section className="register-page section-b-space">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h3>create account</h3>
        <div className="theme-card">
          <form className="theme-form">
            <div className="form-row row">
              <div className="col-md-6">
                <label htmlFor="email"  style={{fontSize:'16px'}}>First Name</label>
                <input type="text"   style={{fontSize:'16px'}} name='name' onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="fname" placeholder="First Name" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="review"  style={{fontSize:'16px'}}>Last Name</label>
                <input type="text"  style={{fontSize:'16px'}} name='lastname' onChange={(e) => setLastName(e.target.value)} value={lastname} className="form-control" id="lname" placeholder="Last Name" required />
              </div>
            </div>
            <div className="form-row row">
              <div className="col-md-6">
                <label htmlFor="email"  style={{fontSize:'16px'}}>email</label>
                <input  name='email'  style={{fontSize:'16px'}} onChange={(e) => setEmail(e.target.value)} value={email} type="text" className="form-control" id="email" placeholder="Email" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="review"  style={{fontSize:'16px'}}>Password</label>
                <input type="password"  style={{fontSize:'16px'}} name='password' onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="review" placeholder="Enter your password" required />
              </div><button  type="button" onClick={() => handleSubmit()}  className="btn btn-solid w-auto">create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default Register