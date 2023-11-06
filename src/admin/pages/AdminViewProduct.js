import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const AdminViewProduct = () => {
    const [product, setProduct] = useState([]);
    const [marketstatus, setMarketStatus] = useState(["trending", "latest", "upcomming", "best"])
    const [selectMarketStatus, setSelectMarketStatus] = useState("");
    const [status, setStatus] = useState("");


    const changeMarketStatus = (upid, value) => {
        axios.patch(`http://localhost:8000/product/${upid}`, {
            marketstatus: value
        }).then((res) => {
            alert("Status successfully update");
        }).catch((err) => {
            return false;
        })
    }

    const inStock = (upid, value) => {
        axios.patch(`http://localhost:8000/product/${upid}`, {
            status: value
        }).then((res) => {
            alert("Status successfully update");
            AllProduct();
        }).catch((err) => {
            return false;
        })
    }

    const outStock = (upid, value) => {
        axios.patch(`http://localhost:8000/product/${upid}`, {
            status: value
        }).then((res) => {
            alert("Status successfully update");
            AllProduct();
        }).catch((err) => {
            return false;
        })
    }
    const AllProduct = () => {
        axios.get(`http://localhost:8000/product`)
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:8000/product/${id}`).then((res) => {
            alert("record successfully delete..");
            setProduct(res.data);
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }
    useEffect(() => {
        AllProduct()
    }, [])

    return (

        <div style={{ width: 'auto', height: '100vh' ,overflow:'scroll'}}>


            <div className="page-body">
                {/* Container-fluid starts*/}
                <div className="container-fluid p-0" >
                    <div className="page-header p-4" style={{ backgroundColor: '#f3f3f3' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="page-header-left" style={{ padding: "0px 40px" }}>
                                    <h2 className="m-0">View Product

                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ol className="breadcrumb pull-right m-0">
                                    <li className="breadcrumb-item h3">
                                        Admin
                                    </li>
                                    <li className="breadcrumb-item active h3">View Product</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ps-5 col-lg-12 pt-2" >
                    <div className='d-flex align-items-center  my-5 mx-5 justify-content-between'>
                        <h2 className="text-center text-dark">View Product</h2>
                        <button className="btn btn-primary mx-5 px-5 ">
                            <NavLink to={`/admin/product`} className="text-white"><h3 className='text-white'>Add Product</h3></NavLink>
                        </button>
                    </div>
                    <div className="mt-3 mx-5 p-5" style={{ boxShadow: '3px 3px 5px 6px #ccc' }}>


                        <table className="table table-hover">
                            <thead>
                                <tr className='fs-4 text-start text-uppercase fw-medium'>
                                    <th className="col-2">Id</th>
                                    <th className="col-2">Name</th>
                                    <th className="col-2">Price</th>
                                    <th className="col-2">Market Status</th>
                                    <th className="col-2 ">Status</th>
                                    <th className="col-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((val) => {
                                        return (
                                            <tr className='fs-6 text-start text-uppercase '>
                                                <td className="col-2 fw-medium" >{val.id}</td>
                                                <td className="col-2 fw-medium">{val.name}</td>
                                                <td className="col-2 fw-medium">{val.price}</td>
                                                <td className="col-2 fw-medium">
                                                    <select onChange={(e) => changeMarketStatus(val.id, e.target.value)} className=' text-uppercase rounded-2 form-control'>
                                                        <option value="">select market status</option>
                                                        {
                                                            marketstatus.map((item) => {

                                                                return (val.marketstatus === item ? <option value={val.marketstatus} selected>{val.marketstatus}</option> : <option>{item}</option>)

                                                            })
                                                        }
                                                    </select>
                                                </td>
                                                <td className="col-2 ">

                                                    {
                                                        val.status === "instock" ? (<button onClick={() => inStock(val.id, "outstock")} className='btn border-success border-4 btn-sm'>Instock</button>) : (<button onClick={() => outStock(val.id, "instock")} className='btn 
                                                        border-primary border-4 btn-sm '>Outstock</button>)
                                                    }


                                                </td>
                                                <td className="col-2">
                                                    <button onClick={() => deleteData(val.id)} className="btn border-4 text-danger border-danger rounded-2 mx-2">Delete</button>
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


    )
}

export default AdminViewProduct