import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
export const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/users`)
            .then((res) => {
                setUsers(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }, [])

    return (
            <div style={{ width: 'auto', height: '90vh' }}>
                <div className="page-body">
                    {/* Container-fluid starts*/}
                    <div className="container-fluid p-0" >
                        <div className="page-header p-4" style={{ backgroundColor: '#f3f3f3' }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="page-header-left" style={{padding:"0px 40px"}}>
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
                    {/* Container-fluid Ends*/}
                    {/* Container-fluid starts*/}
                    <div className="container-fluid p-4">
                        <h2 className='text-center py-3'>View User</h2>
                    <div className="col-lg-10 pt-2 fs-5" style ={{margin:"0px auto"}}>
                        <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
                           

                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th className='col-2 fs-4 text-center'>Id</th>
                                        <th className='col-2 fs-4 text-center'>Name</th>
                                        <th className='col-2 fs-4 text-center'>Email</th>
                                        <th className='col-2 fs-4 text-center'>Password</th>
                                        <th className='col-2 fs-4 text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((val) => {
                                            return (
                                                <tr>
                                                    <td className='col-2 text-center'>{val.id}</td>
                                                    <td className='col-2 text-center'>{val.name}</td>
                                                    <td className='col-2 text-center'>{val.email}</td>
                                                    <td className='col-2 text-center'>{val.password}</td>
                                                    <td className='col-2 text-center'>

                                                        <Link to={`/admin/userdetail/${val.id}`}>
                                                            <button className='btn btn-primary btn-sm'>View</button>
                                                        </Link>


                                                    </td>
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
            </div>

            )
}
export default User;