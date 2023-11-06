import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Userauth from './userauth';
import { NavLink } from 'react-router-dom';


const Cart = () => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); 

    const calculateTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.qty * item.price;
        });
        setTotalPrice(total);
    };

     

    const productDelete = (id) => {
        axios.delete(`http://localhost:8000/carts/${id}`).then((res) => {
            alert("record successfully delete..");
            cartdata();
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    const cartdata = () => {
        axios.get(`http://localhost:8000/carts?userId=${Userauth().id}`)
            .then((res) => {
                setCart(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

     const qtyChange = (id,qty) => {
          const updateCart = cart.map(item=>{
            if(item.id === id){
              if(qty>=0){
                return{...item,qty:parseInt(qty)}  
              }
            }
            return item;
          });

          let data = updateCart.map((item)=>{
            if(item.id === id){
                axios.patch(`http://localhost:8000/carts/${item.id}`,{
                    qty:item.qty,
                }).then((res) => {
                    cartdata();
                }).catch((err)=>{
                    return false;
                })
            }
            return item;
          })
          setCart(data)
     }  
    
    useEffect(() => {
        cartdata()
    }, [])
    useEffect(() => {
      
        calculateTotalPrice();
    }, [cart]);

    return (

        <>
            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="page-title">
                                <h2>cart</h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><div>Home</div></li>
                                    <li className="breadcrumb-item active">cart</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
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
                            <table className="table cart-table">
                                <thead className='col-12 d-flex text-center'>
                                    <th className='col-2'>Img</th>
                                    <th className='col-2'>product name</th>
                                    <th className='col-2'>Price</th>
                                    <th className='col-2'>quantity</th>
                                    <th className='col-2'>action</th>
                                    <th className='col-2'>total</th>
                                </thead>
                                <tbody>
                                    <tr className='col-12 text-center'>
                                        {
                                            cart.map((val) => {
                                                return (
                                                    <tr className='col-12'>
                                                        <td className='col-2'>
                                                            <img className='p-2' src={val.image} width={150} height={150} />
                                                        </td>
                                                        <td className='col-2'><h3>{val.name}</h3>

                                                        </td>
                                                        <td className='col-2'>
                                                            <h2>{val.price}</h2>
                                                        </td>
                                                        <td className='col-2'>
                                                            <div className="qty-box">

                                                                <input width={50} type="number" onChange={(e)=>qtyChange(val.id,e.target.value)} value={val.qty} className="form-control input-number" />

                                                            </div>
                                                        </td>
                                                        <td className='text-center col-2 '><i onClick={() => productDelete(val.id)} className="ti-close" /></td>
                                                        <td className='col-2'>
                                                            <h2 className="td-color">${val.qty * val.price}</h2>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tr>
                                </tbody>

                            </table>
                            <div className="table-responsive-md">
                                <table className="table cart-table ">
                                    <tfoot>
                                        <tr>
                                            <td className='h1'><h2>Total price:</h2></td>
                                            <td className='text-center'>
                                            <h3>${totalPrice}</h3>
                                                 
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row cart-buttons">
                        <div className="col-6"><NavLink  to = {`/product`}className="btn btn-solid">continue shopping</NavLink></div>
                        <div className="col-6"><a href="#" className="btn btn-solid">check out</a></div>
                    </div>
                </div>
            </section>


        </>

    )
}

export default Cart