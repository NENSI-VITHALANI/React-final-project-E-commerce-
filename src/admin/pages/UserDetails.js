import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

  const { userid } = useParams();

  const [cart, setCart] = useState([])
  const [user, setUser] = useState("");

  const getUserDetails = () => {
    axios.get(`http://localhost:8000/users/${userid}`)
      .then((res) => {
        setUser(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const getUserCartDetails = () => {
    axios.get(`http://localhost:8000/carts?userId=${userid}`)
      .then((res) => {
        setCart(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  useEffect(() => {
    getUserCartDetails();
    getUserDetails();
  }, [])

  return (



    <body style={{ backgroundColor: "#f3f3f3" }}>
      <div className="page-body">
        <div className="container-fluid p-0" >
          <div className="page-header p-4 bg-secondary-subtle ">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="page-header-left" style={{ padding: "0px 40px" }}>
                  <h2 className="m-0">User

                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <ol className="breadcrumb pull-right m-0">
                  <li className="breadcrumb-item h3">
                    Admin
                  </li>
                  <li className="breadcrumb-item active h3">User</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-5 col-lg-12 pt-2">
          <div className="mt-3 p-5">


            <div className='container-fluid'>
              <div className='d-flex  col-12 justify-content-center  mt-5'>
                <div>  <h2 className='pt-3 pb-3 me-3'>User Details</h2></div>
                <div className='card bg-secondary-subtle col-4 text-start text-dark p-4 fs-4 rouned-3'>
                  <h4 className='p-2 fs-5'>User Name : {user.name}</h4>
                  <h4 className='p-2 fs-5'>User Email : {user.email}</h4>
                </div>
              </div>
              <div className='container'>
                <h2 className='pt-3 pb-3 text-center'>Product Details</h2>
                <div className='row justify-content-center'>


                  {
                    cart.map((val) => {
                      return (
                        <div className='col-lg-5 mx-2 my-3 p-2 product-card '>
                          <div className='row px-3 '>
                            <div className="col-lg-4">
                              <img src={val.image} className="img-fluid product-image" alt="Product" />
                            </div>
                            <div className="col-lg-6 product-info ms-3" >
                              <h3 className="card-title pb-2 ">Name &nbsp; :- &nbsp; {val.name}</h3>
                              <hr />
                              <h5 className="card-title pb-2 h5">Price &nbsp; :- &nbsp;{val.price}</h5>
                              <hr />
                              <p className="card-text pb-2 fs-4">Qty:{val.qty}</p>
                              <hr />
                              <p className="card-text pb-2 fs-5 text-uppercase">{val.category}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>


            {/* <div className='row justify-content-between'>
          {
            cart.map((val) => {
              return (
                <div className="card p-4 mb-3" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={val.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body ps-4">
                        <h4 className="card-title">{val.name}</h4>
                        <hr />
                        <h4 className="card-title">Price :- {val.price}</h4>

                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }





        </div> */}
          </div>


        </div >
      </div>
    </body>



  )
}

export default UserDetails