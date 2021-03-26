import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart } from './CartHelpers';
import Card from './Card';
import CartProducts from './Components/CartProducts';
import Checkout from './Checkout';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);

    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr />
                {items.map((product, i) => (
                    <CartProducts
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> 
            {/* <Link to="/shop">Continue shopping</Link> */}
        </h2>
    );

    return (
        <Layout>
            <section>
            <img className="breadcrumb-section set-bg imag" src="/img/breadcrumb.jpg" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2 className="text-dark">Shopping Cart</h2>
                            <div className="breadcrumb__option">
                                <Link to="/" className="text-dark">Home</Link>
                                <span className="text-dark">Shopping Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="shoping-cart spad">
            <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div className="shoping__cart__table">
                    <table>
                        {items.length > 0 ? showItems(items) : noItemsMessage()}
                </table>
                </div>
            </div>
        </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__btns">
                            <Link to="/shop" className="primary-btn cart-btn CS">CONTINUE SHOPPING</Link>
                            {/* <Link to="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                                Upadate Cart</Link> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__continue">
                            <div className="shoping__discount">
                                <h5>Discount Codes</h5>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code" />
                                    <button type="submit" className="site-btn">APPLY COUPON</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                <div className="col-lg-6">
                    <div className="shoping__checkout">
                        <h5>Cart Total</h5>
                        <Checkout products={items} setRun={setRun} run={run} />
                        {/* <ul>
                            <li>Subtotal <span>$454.98</span></li>
                            <li>Total <span>$454.98</span></li>
                        </ul>
                        <Link to="/checkout" className="primary-btn">PROCEED TO CHECKOUT</Link> */}
                    </div>
                </div>

                </div>
            </div>
        </section>
            <div className="row">
                {/* <div className="col-6">{items.length > 0 ? showItems(items) : noItemsMessage()}</div> */}

                {/* <div className="col-6">
                    <h2 className="mb-4">Your cart summary</h2>
                    <hr />
                    <Checkout products={items} setRun={setRun} run={run} />
                </div> */}
            </div>
        </Layout>
    );
};

export default Cart;
