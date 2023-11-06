import React, { useEffect, useState } from 'react'
import Userauth from '../../users/userauth'
import axios from 'axios';
const AdminProfile = () => {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem('checkUserLogin')))

  }, [])
  return (
    <div>
      <div style={{ width: 'auto', height: '90vh' }}>
        <div className="container-fluid p-0" >
          <div className="page-header p-4" style={{ backgroundColor: '#f3f3f3' }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="page-header-left" style={{ padding: "0px 40px" }}>
                  <h2 className="m-0">Profile

                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <ol className="breadcrumb pull-right m-0">
                  <li className="breadcrumb-item h3">
                    Admin
                  </li>
                  <li className="breadcrumb-item active h3">Profile</li>
                </ol>
              </div>
            </div>
          </div>
          <section className="contact-page py-3" style={{ fontSize: '18px' }}>
        <div className="container">

          <div className="row">
            <div className="col-sm-12">
              <form className="theme-form">
                <div className="form-row row">
                  <div className="col-md-6">
                    <table className='w-100 my-4 '>
                      <tr className='d-flex flex-column'>
                        <td className='h5 py-2'>Name</td>
                        <td className='form-control  rounded-2 '><h3 className=' m-0 py-2 px-3'>{profile.name}</h3></td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <table className='w-100 my-4'>
                      <tr className='d-flex flex-column'>
                        <td className='h5 py-2'>Last Name</td>
                        <td className='form-control rounded-2 '><h3 className='  m-0 py-2 px-3'>{profile.lastname}</h3></td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <table className='w-100 my-4'>
                      <tr className='d-flex flex-column'>
                        <td className='h5 py-2'>Email</td>
                        <td className='form-control  rounded-2'><h3 className=' m-0 py-2 px-3'>{profile.email}</h3></td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <table className='w-100 my-4'>
                      <tr className='d-flex flex-column'>
                        <td className='h5 py-2'>Password</td>
                        <td className='form-control  rounded-2'><h3 className='  m-0 py-2 px-3'>{profile.password}</h3></td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <table className='w-100 my-4'>
                      <tr className='d-flex flex-column'>
                        <td className='h5 py-2'>Role</td>
                        <td className='form-control rounded-2'><h3 className='m-0 py-2 px-3'>{profile.role}</h3></td>
                      </tr>
                    </table>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
   

    </div>
  )
}

export default AdminProfile;
