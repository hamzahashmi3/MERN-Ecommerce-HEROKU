import React from 'react'
import {Link} from "react-router-dom";

const Footer=()=>{
        return (
            
    <div>

        <footer class="footer spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="footer__about">
                        <div class="footer__about__logo">
                            <Link to="/">
                                <img src="img/logo3.svg" alt="" style={{height:"60px", width:"200px"}} />
                            </Link>
                        </div>
                        <ul>
                            <li>Address: 81, Commercial Umar Block, Sector B, Bahria Town Lahore.</li>
                            <li>Phone: +92301 7111141</li>
                            <li>Email: 
                                <a href="https://mail.google.com/mail/u/0/#inbox" class="__cf_email__" data-cfemail="dbb3beb7b7b49bb8b4b7b4a9b7b2b9f5b8b4b6">salmanlobby3@gmail.com </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div class="footer__widget">
                        <h6>Useful Links</h6>
                        <ul>
                            {/* <li>
                                <Link to="#">About Us</Link>
                            </li> */}
                            <li>
                                <Link to="/shop">About Our Shop</Link>
                            </li>
                            {/* <li>
                                <Link to="#">Secure Shopping</Link>
                            </li> */}
                            {/* <li>
                                <Link to="#">Delivery infomation</Link>
                            </li> */}
                            {/* <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Our Sitemap</Link>
                            </li> */}
                        </ul>
                        <ul>
                            {/* <li>
                                <Link to="#">Who We Are</Link>
                            </li>
                            <li>
                                <Link to="#">Our Services</Link>
                            </li>
                            <li>
                                <Link to="#">Projects</Link>
                            </li> */}
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            {/* <li>
                                <Link to="#">Innovation</Link>
                            </li>
                            <li>
                                <Link to="#">Testimonials</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="footer__widget">
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="#">
                            <input type="text" placeholder="Enter your mail" />
                            <button type="submit" class="site-btn">Subscribe</button>
                        </form>
                        <div class="footer__widget__social">
                            <Link to="#">
                                <i class="fa fa-facebook"></i>
                            </Link>
                            <Link to="#">
                                <i class="fa fa-instagram"></i>
                            </Link>
                            <Link to="#">
                                <i class="fa fa-twitter"></i>
                            </Link>
                            <Link to="#">
                                <i class="fa fa-pinterest"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer__copyright">
                        <div class="footer__copyright__text">
                            <p>
                                Copyright &copy; All rights reserved | This website is made with 
                                <i class="fa fa-heart" aria-hidden="true"></i> by 
                                <Link to="#" target="_blank">TechnoCannons</Link>
                            </p>
                        </div>
                        <div class="footer__copyright__payment">
                            <img src="img/payment-item.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>

    </div>

        )
}

export default Footer;
