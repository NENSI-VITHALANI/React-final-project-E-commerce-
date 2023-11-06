import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const AdminContact = () => {
    const[contact,setContact] = useState([])

    const contactView=()=>{
        axios.get(`http://localhost:8000/contacts`).then((res)=>{
          setContact(res.data)
        }).catch((err)=>{
          console.log(err);
          return false
        })
      }
      const deleteData = (id)=>{
        axios.delete(`http://localhost:8000/contacts/${id}`).then((res)=>{
          alert("Record successfully delete..");
          contactView();
        }).catch((err)=>{
          console.log(err);
          return false;
        })
      }

      useEffect(()=>{
        contactView();
      },[])

  return (
    <div>
      
      <div style={{ width: 'auto', height: '100vh' ,overflow:'scroll'}}>


<div className="page-body">
    {/* Container-fluid starts*/}
    <div className="container-fluid p-0" >
        <div className="page-header p-4" style={{ backgroundColor: '#f3f3f3' }}>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="page-header-left" style={{ padding: "0px 40px" }}>
                        <h2 className="m-0">User Contact 

                        </h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ol className="breadcrumb pull-right m-0">
                        <li className="breadcrumb-item h3">
                            Admin
                        </li>
                        <li className="breadcrumb-item active h3">User Contact </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div className="ps-5 col-lg-12 pt-2" >
        <div className='d-flex align-items-center  my-5 mx-5 justify-content-between'>
            <h2 className="text-center text-dark">contact-details</h2>
      
        </div>
        <div className="mt-3 mx-5 p-5" style={{ boxShadow: '3px 3px 5px 6px #ccc' }}>


            <table className="table table-hover">
                <thead>
                    <tr className='fs-4 text-start text-uppercase fw-medium'>
                    <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                { 
                        contact.map((val) => {
                            return (
                                <tr>
                                    <td className='fs-5'>{val.id}</td>
                                    <td className='fs-5'>{val.name}</td>
                                    <td className='fs-5'>{val.lastname}</td>
                                    <td className='fs-5'>{val.email}</td>
                                    <td className='fs-5'>{val.phone}</td>
                                    <td><button onClick={()=>deleteData(val.id)} className="btn border-4 text-danger border-danger rounded-2 mx-2">Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>



    </div>


</div>

</div>
        <center>
        <h1 className='my-3'>Welcome To User Contact Detail</h1>
         <div className="ps-5 col-lg-12 pt-2">
            <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-4">
                <h3 className="text-center my-4">Contact Detail</h3>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        
                            contact.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.lastname}</td>
                                        <td>{val.email}</td>
                                        <td>{val.phone}</td>
                                        <td><button onClick={()=>deleteData(val.id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>


            </div>

          
           
        </div>
        </center>
    </div>
  )
}

export default AdminContact
