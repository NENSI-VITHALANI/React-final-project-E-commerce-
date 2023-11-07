import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Product = () => {

    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [price_range, setPriceRange] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    let pricedata = [
        {
            "price_name": "$0 - $2000",
            "id": 1
        },
        {
            "price_name": "$2000 - $4000",
            "id": 2
        },
        {
            "price_name": "$4000 - $6000",
            "id": 3
        },
        {
            "price_name": "$8000 - $10000",
            "id": 4
        },
        {
            "price_name": "$10000 - $20000",
            "id": 5
        },
        {
            "price_name": "$20000 - $22000",
            "id": 6
        }
    ]
    let Marketstatus = [
        {
          "name": "trending",
          "id": 1
        }, {
          "name": "latest",
          "id": 2
        }, {
          "name": "upcomming",
          "id": 3
        }, {
          "name": "best",
          "id": 4
        }
      ]
  
      const handleSearchChange = async(e)=>{
       let data = await axios.get (`http://localhost:8000/product?q=${e}`)
       setProduct(data.data)
      }

    const allProduct = () => {
        axios.get(`http://localhost:8000/product`)
            .then((res) => {
                setProduct(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const allCategory = () => {
        axios.get(`http://localhost:8000/category`)
            .then((res) => {
                setCategory(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    const filterProducts = (products) => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const categoryFilter = (category) => {
        if (category === "all") {
            allProduct();
        } else {
            axios.get(`http://localhost:8000/product?category=${category}`).then((res) => {
                console.log(res.data);
                setProduct(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
        }
    }

    const categoryPriceData = async (price) => {
        let record = await axios.get(`http://localhost:8000/product?price_gte=${price[0]}&price_lte=${price[1]}`)
        setProduct(record.data)
    }
    const MarketstatusData = (marketstatus) => {
        axios.get(`http://localhost:8000/product?marketstatus=${marketstatus}`)
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                return false;
            })
    }
    useEffect(() => {
        allProduct();
        allCategory();
        setPriceRange(pricedata);
    }, [])

    return (
        <>
            <div className="container   p-5">
                <div className='d-flex  mb-5 align-items-center justify-content-between'>
                    <h2 className=" text-center m-0">All Product</h2>
                    <input onChange={(e)=>handleSearchChange(e.target.value)} className='  w-25 h6 py-3 px-3 rounded-2' type='text' placeholder='serach your product' />
                </div>
                <div className="row">

                    <div className='col-lg-3'>
                        <h3 className='fw-medium text-dark'>Category Filter</h3>
                        <hr />
                        <div className="card p-3" style={{ width: '18rem' }}>
                            {
                                category.map((val) => {
                                    return (
                                        <>
                                            <button onClick={() => categoryFilter(val.category_name)} style={{ width: '100%' }} type="button" class="my-2 btn  btn-solid h3">{val.category_name}</button>
                                        </>
                                    )
                                })
                            }
                            <button onClick={() => categoryFilter("all")} style={{ width: '100%' }} type="button" class="my-2 btn btn btn-solid h3">All</button>

                        </div>

                        <h3 className='text-dark fw-medium'>Price Wise Filter</h3>
                        <hr />
                        <div className="card p-3" style={{ width: '18rem' }}>
                            {
                                price_range.map((val) => {
                                    return (
                                        <button className='py-2 btn btn-solid h3 my-2' name="category" onClick={() => categoryPriceData(val.price_name.split(" - ").map(price => price.replace("$", "")))}>{val.price_name}</button>
                                    )
                                })
                            }
                        </div>

                        <h3 className='text-dark fw-medium'>Marketstatus</h3>
                        <hr />
                        <div className="card p-3" style={{ width: '18rem' }}>
                       {
                                   Marketstatus.map((val) => {
                                    return (
                                      <div className='d-flex py-2' key={val.name}>
                                        <input type="radio" name='marketstatus' style={{ width: "20px", outline: "none", borderRadius: "0px" }} onClick={() => MarketstatusData(val.name)} ></input>
                                        <p name='marketstatus' className='my-0 ps-2 fs-5' style={{ display: "inline" }} onClick={() => MarketstatusData(val.name)} >{val.name}</p>
                                      </div>
                                    )
                                  })
                       }
                        </div>

                    </div>

                    <div className='col-lg-9 row '>
                        {
                            filterProducts(product).map((val) => {

                                return (
                                    <div className="col-lg-4 pb-3" >

                                        <div className='card' >
                                            <div className="product-box product-wrap product-style-3 ">
                                                <div className="img-wrapper">
                                                    <div className="front text-center" >
                                                        <div><img style={{ width: '200px', height: '220px' }} alt src={val.image} className="img-fluid p-3 lazyload bg-img" /></div>
                                                    </div>
                                                    <div className="cart-detail"><NavLink href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></NavLink> <NavLink href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></NavLink> <NavLink href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></NavLink></div>
                                                </div>
                                                <div className="product-info">
                                                    <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></div>
                                                    <div>
                                                        <h6>{val.name}</h6>
                                                    </div>
                                                    <h4>{val.price}</h4>
                                                    <div className="add-btn p-2">
                                                        <div className="d-flex  flex-column justify-content-between">



                                                            <Link to={`/product_details/${val.id}`} ><button className='btn btn-outline danger border-danger w-100'>  <i className="ti-eye" /> View More</button></Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Product;