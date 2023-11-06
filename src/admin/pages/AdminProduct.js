import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const AdminProduct = () => {
    const [category, setCategory] = useState([]);

    const [categoryname, setCategoryName] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [marketstatus, setMarketStatus] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = () => {
        axios.post(`http://localhost:8000/product`, {
            name: name,
            price: price,
            qty: qty,
            desc: description,
            image: image,
            category: categoryname,
            marketstatus: marketstatus,
            status: status
        })
            .then((res) => {
                alert("Product successfully Add");
                setCategoryName("");
                setName("");
                setPrice("");
                setQty("");
                setDescription("");
                setImage("");
                setMarketStatus("");
                setStatus("");
            }).catch((err) => {
                console.log(err);
                return false;
            })


    }






    useEffect(() => {
        axios.get(`http://localhost:8000/category`)
            .then((res) => {
                setCategory(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }, [])

    return (
        <>
            <div style={{ width: 'auto', height: '100vh' }}>


                <div className="page-body">
                    {/* Container-fluid starts*/}
                    <div className="container-fluid p-0" >
                        <div className="page-header p-4" style={{ backgroundColor: '#f3f3f3' }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="page-header-left"  style={{padding:"0px 40px"}}>
                                        <h2 className="m-0">Product

                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ol className="breadcrumb pull-right m-0">
                                        <li className="breadcrumb-item h3">
                                        Admin
                                        </li>
                                        <li className="breadcrumb-item active h3">Product</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Container-fluid Ends*/}
                    {/* Container-fluid starts*/}

                    <div className="row justify-content-center mt-5" style ={{fontSize:'20px'}}>
                        <div className="ps-5 col-lg-9 pt-2">
                            <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 rounded-2 p-5">
                
                                <form>
                                    <div className="row  justify-content-between">
                                        <div className="col-lg-6 ps-5">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                                                <select name="category" style={{borderRadius:"12px" ,padding:"20px"}} onChange={(e) => setCategoryName(e.target.value)} className="form-control">
                                                    <option value="">---Select Category---</option>
                                                    {
                                                        category.map((item) => {
                                                            return (
                                                                <option value={item.category_name}>{item.category_name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                                                <input type="text" name="name" style={{borderRadius:"12px" ,padding:"20px"}} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Product Price</label>
                                                <input type="number" name="price" style={{borderRadius:"12px" ,padding:"20px"}} onChange={(e) => setPrice(e.target.value)} className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Product Qty</label>
                                                <input type="number" name="qty" style={{borderRadius:"12px" ,padding:"20px"}} onChange={(e) => setQty(e.target.value)} className="form-control" id="exampleInputPassword1" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 ps-5">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Product Image Url</label>
                                                <input type="text" name="image" style={{borderRadius:"12px" ,padding:"20px"}} onChange={(e) => setImage(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Product Description</label>
                                                <input type="text"  style={{borderRadius:"12px" ,padding:"20px"}} name="description" onChange={(e) => setDescription(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Product Market Status</label>
                                                <select name="marketstatus" style={{borderRadius:"12px" ,padding:"20px"}} onChange={(e) => setMarketStatus(e.target.value)} className="form-control">
                                                    <option value="">---Select Market Status---</option>
                                                    <option value="trending">Trending</option>
                                                    <option value="latest">Latest</option>
                                                    <option value="upcomming">Upcomming</option>
                                                    <option value="best">Best</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Status</label>
                                                <select  style={{borderRadius:"12px" ,padding:"20px"}} onChange={(e) => setStatus(e.target.value)} className="form-control">
                                                    <option value="">---Select Status---</option>
                                                    <option value="instock">Instock</option>
                                                    <option value="outstock">Outstock</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                 <div className="row justify-content-center ">
                                 <button type="button" onClick={() => handleSubmit()} className="btn btn-primary my-3 py-3   w-25"><h3 className="text-white m-0">Submit</h3></button>
                                 </div>
                                </form>

                            </div>

                            <button className="btn btn-primary mt-5  py-3   w-25">
                                <NavLink to={`/admin/viewproduct`} className="text-white"><h3 className="text-white m-0">View Product</h3></NavLink>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}
export default AdminProduct;