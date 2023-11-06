import axios from "axios"
import { useEffect, useState } from "react"
import Slider from "./Slider";
import { Link, NavLink } from "react-router-dom";

const Home = () => {

  const [product, setProduct] = useState([]);
  const [furniture, setFurniture] = useState([]);

  const getAllProduct = async () => {
    axios.get(`http://localhost:8000/product?category=eletronics&&category=fashion`)
      .then((res) => {
        setProduct(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }
  const getfurniture = () => {

    axios.get(`http://localhost:8000/product?category=furniture`)
      .then((res) => {
        setFurniture(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }
  useEffect(() => {
    getAllProduct();
    getfurniture();


  }, []);
  return (
    <>
      <Slider />
      <div className="top-section">
        <div className="title6 section-t-space text-center">
          <h1 style={{ fontWeight: '700', fontSize: '40px', lineHeight: '1' }} className="font-fraunces ">top collection</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 ">
              <div className="product-para">
                <p style={{ fontSize: '18px' }} className="my-2 text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bag-product py-5  ratio_square">
        <div className="container">
          <div className="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-3 row-cols-md-3 row-cols-2 gy-sm-4 gy-3">
            {
              product.map((val) => {
                return (
                  <NavLink to={`/product_details/${val.id}`}>
                    <div className="product-box product-wrap product-style-3 my-4">
                      <div className="img-wrapper">
                        <div className="front" >
                          <div><img style={{ width: '300px', height: '220px' }} alt src={val.image} className="img-fluid  lazyload bg-img" /></div>
                        </div>
                        <div className="cart-detail"><NavLink href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></NavLink> <NavLink href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></NavLink> <NavLink href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></NavLink></div>
                      </div>
                      <div className="product-info">
                        <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></div>
                        <div>
                          <h6>{val.name}</h6>
                        </div>
                        <h4>{val.price}</h4>
                        <div className="add-btn">
                          <div>
                            <i className="ti-shopping-cart" /> add to cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>

                )
              })
            }
          </div>
        </div>
      </section>


      <div className="top-section">
        <div className="title6 section-t-space">
          <h1 style={{ fontWeight: '700', fontSize: '40px', lineHeight: '1' }} className="font-fraunces ">top furntiure</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 ">
              <div className="product-para">
                <p style={{ fontSize: '18px' }} className="my-2 text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-4 ratio_asos">
        <div className="container">

          <div className="row mordern-box-margin">

            {
              furniture.map((val) => {
                return (


                  <div className="col-lg-4 col-6">

                    <NavLink  to={`/product_details/${val.id}`} >
                      <div className="mordern-box">
                        <div className="absolute-img">
                          <img src={val.image} className="img-fluid" alt />
                        </div>
                        <div className="mordern-content">
                          <div>
                            <h6 className="py-2" >{val.name}</h6>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur, sequi
                            obcaecati molestias sed, dolorum iusto necessitatibus</p>
                          <div className="mordern-bottom">
                            <div className="left">
                              <h4>{val.price}</h4>
                              <ul className="color-variant">
                                <li className="bg-light0" />
                                <li className="bg-light1" />
                                <li className="bg-light2" />
                              </ul>
                            </div>
                            <div className="right">
                              <div className="add-extent d-none d-md-block">
                                <i className="fa fa-plus animated-btn" />
                                <div className="options">
                                  <ul>
                                    <li><button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart"><i className="ti-shopping-cart" /></button>
                                    </li>
                                    <li><NavLink href="javascript:void(0)" title="Add to Wishlist"><i className="ti-heart" aria-hidden="true" /></NavLink></li>
                                    <li><NavLink href="#" data-bs-toggle="modal" data-bs-target="#quick-view" title="Quick View"><i className="ti-search" aria-hidden="true" /></NavLink></li>
                                    <li><NavLink href="compare.html" title="Compare"><i className="ti-reload" aria-hidden="true" /></NavLink></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </NavLink>

                  </div>


                )
              })
            }





          </div>

        </div>
      </section >



    </>

  )
}

export default Home;