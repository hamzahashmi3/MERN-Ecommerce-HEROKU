import React, {useState, useEffect} from 'react';
import { getProducts } from '../ApiCore';
import ShowImage from '../ShowImage';





const TopRatted=(props)=> {

    
const [productsBySell, setProductsBySell] = useState([]);
const [productsByArrival, setProductsByArrival] = useState([]);
const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };
    
    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };
    
    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <section className="latest-product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="latest-product__text">
                    <h4>Top Rated Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                            {productsBySell.map((product, i) => (
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <ShowImage item={product} url="product" />
                                        {/* <img src={product.img} alt="" /> */}
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>{product.name}</h6>
                                        <span>Rs {product.price}</span>
                                    </div>
                                </a>
                            ))}
                                </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="latest-product__text">
                        <h4>Latest Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                            {productsByArrival.map((product, i) => (
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <ShowImage item={product} url="product" />
                                        {/* <img src={product.img} alt="" /> */}
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>{product.name}</h6>
                                        <span>RS {product.price}</span>
                                    </div>
                                </a>
                            ))}
                               </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Review Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-1.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-2.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-3.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div className="latest-prdouct__slider__item">
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-1.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-2.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-3.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            
            </div>
        </div>
    </section>
    )
}

export default TopRatted
