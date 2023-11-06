import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import checkUserLogin from './userauth';
const ProductDetails = () => {

    const navigate = useNavigate();

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const getSingleProductRecord = async () => {
        try {
            let single = await axios.get(`http://localhost:8000/product/${productId}`);
            if (single) {
                setProduct(single.data)
            } else {
                console.log("record not fetch");
                return false;
            }

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const Addtocart = (productId) => {
        if (!checkUserLogin()) {
            alert("Login ");
            navigate('/login');
        }

        axios.get(`http://localhost:8000/product/${productId}`)
            .then((res) => {
                console.log(res.data);
                axios.post(`http://localhost:8000/carts`, {
                    name: res.data.name,
                    price: res.data.price,
                    qty: res.data.qty,
                    image: res.data.image,
                    category: res.data.category,
                    userId: checkUserLogin().id
                }).then((res) => {
                    alert("Product successfully add");
                    navigate('/cart')
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
            }).catch((err) => {
                console.log(err);
                return false;
            })

    }

    useEffect(() => {
        getSingleProductRecord();
    }, []);

    return (
        <>
            {/* <div className='container'>
            <h1 className='pt-3 pb-3 text-center'>Product Details</h1>
            <div className='row p-5'>
                <div className='col-lg-9 p-4' style={{ border: '1px solid gray', borderRadius: '10px' }}>
                    <div className='row'>
                        <div className="col-lg-3">
                            <img src={product.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-lg-6">
                            <div className="card-body">
                                <h5 className="card-title pb-2">Name :- {product.name}</h5>
                                <hr></hr>
                                <h5 className="card-title pb-2">Price :- {product.price}</h5>
                                <hr></hr>
                                <p className="card-text pb-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <hr></hr>
                                <button onClick={() => Addtocart(product.id)} className='btn btn-success w-50'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div> */}
            < body style={{ backgroundColor: "#f3f3f3" }}>
                <div className='container'>
                    <h1 className='pt-3 pb-3 text-center'>Product Details</h1>
                    <div className='row p-5 justify-content-center'>
                        <div className='col-lg-9 p-4 product-card '>
                            <div className='row px-3 '>
                                <div className="col-lg-4">
                                    <img src={product.image} className="img-fluid product-image" alt="Product" />
                                </div>
                                <div className="col-lg-6 product-info ms-3" >
                                    <h3 className="card-title pb-2 ">Name &nbsp; :- &nbsp; {product.name}</h3>
                                    <hr />
                                    <h5 className="card-title pb-2 h5">Price &nbsp; :- &nbsp;{product.price}</h5>
                                    <hr />
                                    <p className="card-text pb-2 ">The trick to choosing the best wear for yourself is to keep in mind your body type, individual style, occasion and also the time of day or weather. In addition to eye-catching products from top brands, we also offer an easy 30-day return and exchange policy, free and fast shipping across all pin codes, cash or card on delivery option, deals and discounts, among other perks. So, sign up now and shop for westarn wear to your heart’s content on Multikart.</p>
                                    <hr />
                                    <button onClick={() => Addtocart(product.id)} className='btn btn-solid add-to-cart-btn'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>


        </>
    )
}

export default ProductDetails