import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
const AdminDashboard = () => {
  const [usercnt, setUserCnt] = useState(0);
  const [categorycnt, setCategory] = useState(0);
  const [productcnt, setProduct] = useState(0);
  const [contactcnt, setContact] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8000/users`).then((res) => {
      setUserCnt(res.data.length)
    }).catch((err) => {
      console.log(err);
      return false
    })

    axios.get(`http://localhost:8000/category`).then((res) => {
      setCategory(res.data.length)
    }).catch((err) => {
      console.log(err);
      return false
    })

    axios.get(`http://localhost:8000/product`).then((res) => {
      setProduct(res.data.length)
    }).catch((err) => {
      console.log(err);
      return false
    })

    axios.get(`http://localhost:8000/contacts`).then((res) => {
      setContact(res.data.length)
    }).catch((err) => {
      console.log(err);
      return false
    })
  }, [])

  return (
    <>
    
      <div style={{width:'auto',height:'100vh'}}>


       <div className="page-body">
          {/* Container-fluid starts*/}
          <div className="container-fluid p-0" >
          <div className="page-header p-4" style={{ backgroundColor: '#f3f3f3' }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="page-header-left" style={{ padding: "0px 40px" }}>
                  <h2 className="m-0">Dashboard

                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <ol className="breadcrumb pull-right m-0">
                  <li className="breadcrumb-item h3">
                    Admin
                  </li>
                  <li className="breadcrumb-item active h3">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
          {/* Container-fluid Ends*/}
          {/* Container-fluid starts*/}
          <div className="container-fluid p-4">
            <div className="row">
              <div className="col-xxl-3 col-md-6 xl-50">
                <div className="card o-hidden widget-cards p-3">
                  <div className="warning-box card-body">
                    <div className="media static-top-widget align-items-center">
                      <div className="icons-widgets">
                        <div className="align-self-center text-center">
                          <h3 className="text-white align-items-center m-0">{usercnt}</h3>
                        </div>
                      </div>
                      <div className="media-body media-doller">
                        <span className="m-0 h1">user</span>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 xl-50">
                <div className="card o-hidden widget-cards p-3">
                  <div className="secondary-box card-body">
                    <div className="media static-top-widget align-items-center">
                      <div className="icons-widgets">
                        <div className="align-self-center text-center">
                          <h3 className="text-white align-items-center m-0">{categorycnt}</h3>
                        </div>
                      </div>
                      <div className="media-body media-doller">
                        <span className="m-0 h1">category</span>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 xl-50">
                <div className="card o-hidden widget-cards p-3">
                  <div className="primary-box card-body">
                    <div className="media static-top-widget align-items-center">
                      <div className="icons-widgets">
                        <div className="align-self-center text-center">
                          <h3 className="text-white align-items-center m-0">{productcnt}</h3></div>
                      </div>
                      <div className="media-body media-doller"><span className="m-0 h1">Product</span>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 xl-50">
                <div className="card o-hidden widget-cards p-3">
                  <div className="danger-box card-body">
                    <div className="media static-top-widget align-items-center">
                      <div className="icons-widgets">
                        <div className="align-self-center text-center">
                          <h3 className="text-white align-items-center m-0">{contactcnt}</h3>
                        </div>
                      </div>
                      <div className="media-body media-doller"><span className="m-0 h1">Contact</span>

                      </div>
                    </div>
                  </div>
                </div>
              </div>





            </div>
          </div>

        </div>
       </div>




      
    </>




  )
}

export default AdminDashboard