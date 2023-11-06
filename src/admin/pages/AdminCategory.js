import { useEffect, useState } from "react";
import axios from "axios";
import { Trash, Pencil } from 'react-bootstrap-icons';

const AdminCategory = () => {
    const [category, setCategory] = useState("");

    const [categoryData, setCategoryData] = useState([]);
    const [isedit, setIsEdit] = useState("");
    const handleSubmit = () => {
        if (isedit) {
            axios.put(`http://localhost:8000/category/${isedit}`, {
                category_name: category
            })
                .then((res) => {
                    alert("Category successfully Update");
                    setCategory("");
                    setIsEdit("");
                    getUser();
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
        } else {
            axios.post(`http://localhost:8000/category`, {
                category_name: category
            })
                .then((res) => {
                    alert("Category successfully add");
                    setCategory("");
                    getUser();
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
        }
    }
    const getUser = () => {
        axios.get(`http://localhost:8000/category`)
            .then((res) => {
                setCategoryData(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    const deleteData = (id) => {
        axios.delete(`http://localhost:8000/category/${id}`)
            .then((res) => {
                alert("Category delete");
                setCategory("");
                getUser();
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    const editData = (id) => {
        axios.get(`http://localhost:8000/category/${id}`)
            .then((res) => {
                setCategory(res.data.category);
                setIsEdit(id)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    useEffect(() => {
        getUser();
    }, [])
    return (
        <>
            <div style={{ width: 'auto', height: '90vh' }}>


                <div className="page-body">
                    {/* Container-fluid starts*/}
                    <div className="container-fluid p-0" >
                        <div className="page-header p-4" style={{ backgroundColor: '#f3f3f3' }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="page-header-left"  style={{padding:"0px 40px"}}>
                                        <h2 className="m-0">Category

                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ol className="breadcrumb pull-right m-0">
                                        <li className="breadcrumb-item h3">
                                            Home
                                        </li>
                                        <li className="breadcrumb-item active h3">Category</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Container-fluid Ends*/}
                    {/* Container-fluid starts*/}
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-md-6 xl-50 my-4 py-4 px-3">
                            <div className="d-flex align-items-center" >
                                <input className="rounded-2 py-3 fs-4 px-4 w-75" type="category" onChange={(e) => setCategory(e.target.value)} value={category} name="category_name" placeholder="Enter category" />
                                <div className="ms-2">
                                    {
                                        isedit ? (<input className=" py-3 px-5 btn btn-solid fs-4 px-5 py-2 h3 m-0 rounded-2" type="button" onClick={() => handleSubmit()} value="Edit" />) : (<input className="py-3 btn fs-4 py-2 btn-solid px-5 h3 m-0 rounded-2" type="button" onClick={() => handleSubmit()} value="submit" />)
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-xxl-6 col-md-6 xl-50 my-4 py-4 px-3 ">
                                <div>
                                    <table border={1} className="w-100">
                                        <thead className="text-center border bg-light text-dark ">
                                            <th className="py-3 h4">Id</th>
                                            <th className="py-3 h4">Name</th>
                                            <th className="py-3 h4">Action</th>
                                        </thead>
                                        <tbody className="text-center border">

                                            {
                                                categoryData.map((val) => {
                                                    return (
                                                        <tr key={val.id} className="border">
                                                            <td className="py-3 h4 text-center col-2">{val.id}</td>
                                                            <td className="py-3 h4 text-center col-3">{val.category_name}</td>
                                                            <td className="py-3 h4">
                                                                <button
                                                                    onClick={() => deleteData(val.id)}
                                                                    className="btn border-danger border-3 rounded-2 mx-2"
                                                                >
                                                                 Delete
                                                                </button> 
                                                                <button
                                                                    onClick={() => editData(val.id)}
                                                                    className="btn border-success border-3  rounded-2  "
                                                                >
                                                                Edit
                                                                </button>
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
            </div>

        </>

    )
}
export default AdminCategory;