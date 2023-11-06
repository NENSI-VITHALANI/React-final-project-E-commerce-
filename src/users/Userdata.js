import React, { useEffect, useState } from 'react'
import Userauth from './userauth';
import axios from 'axios';
const UserData = () => {
  const [profile, setProfile] = useState([])
  const [cart, setCart] = useState([]);

  const cartdata = () => {
    axios.get(`http://localhost:8000/carts?userId=${Userauth().id}`)
      .then((res) => {
        setCart(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const productDelete = (id) => {
    axios.delete(`http://localhost:8000/carts/${id}`).then((res) => {
      alert("record successfully delete..");
      cartdata();
    }).catch((err) => {
      console.log(err);
      return false;
    })
  }

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem('checkUserLogin')))
    cartdata()
  }, [])
  return (
    <div>
      <div>
        <div className="breadcrumb-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="">
                  <h2>profile</h2>
                </div>
              </div>
              <div className="col-sm-6">
                <nav aria-label="breadcrumb" className="theme-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item h3"><div>Home</div></li>
                    <li className="breadcrumb-item active h3">profile</li>
                  </ol>
                </nav>
              </div>
            </div>
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
                        <td className='form-control '><h3 className='m-0 py-2 px-3'>{profile.name}</h3></td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <table className='w-100 my-4'>
                      <tr className='d-flex flex-column'>
                        <td className='h5 py-2'>Last Name</td>
                        <td className='form-control '><h3 className='m-0 py-2 px-3'>{profile.lastname}</h3></td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <table className='w-100 my-4'>
                      <tr className='d-flex flex-column'>
                        <td className='h5 py-2'>Email</td>
                        <td className='form-control '><h3 className='m-0 py-2 px-3'>{profile.email}</h3></td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <table className='w-100 my-4'>
                      <tr className='d-flex flex-column'>
                        <td className='h5 py-2'>Password</td>
                        <td className='form-control '><h3 className='m-0 py-2 px-3'>{profile.password}</h3></td>
                      </tr>
                    </table>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="cart-section section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="cart_counter">
                <div className="countdownholder">
                  Your cart will be expired in<span id="timer" /> minutes!
                </div>
                <div className="cart_checkout btn btn-solid btn-xs">check out</div>
              </div>
            </div>
            <div className=" table-responsive-xs">
              <table className="table cart-table ">
                <thead className='col-12 d-flex text-center'>
                  <th className='col-2'>Img</th>
       
                  <th className='col-2'>product name</th>
                  <th className='col-2'>Price</th>

                  <th className='col-2'>action</th>
                  <th className='col-2'>total</th>
                </thead>
                <tbody>
                  <tr className='col-12 text-center'>
                    {
                      cart.map((val) => {
                        return (
                          <tr className='col-10'>
                            <td className='col-2'>
                              <img className='p-2' src={val.image} width={150} height={150} />
                            </td>
                            <td className='col-2'><h3>{val.name}</h3>

                            </td>
                            <td className='col-2'>
                              <h2>{val.price}</h2>
                            </td>

                            <td className='text-center col-2 '><i onClick={() => productDelete(val.id)} className="ti-close" /></td>
                            <td className='col-2'>
                              <h2 className="td-color">${val.price}</h2>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tr>
                </tbody>

              </table>

            </div>
          </div>

        </div>
      </section>
    </div>

  )
}

export default UserData;
