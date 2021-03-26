
import React from 'react';
import {Link} from "react-router-dom";
import Layout from '../Layout';

const Contact=()=>{
    return (
        <Layout>
            <section className="" data-setbg="">
                <img className="breadcrumb-section set-bg imag" src="/img/breadcrumb.jpg" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center text-dark">
                            <div className="breadcrumb__text">
                                <h2 className="text-dark">Contact Us</h2>
                                <div className="breadcrumb__option">
                                    <Link to="/" className="text-dark">Home</Link>
                                    <span className="text-dark">Contact Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_phone"></span>
                                <h4>Phone</h4>
                                <p>+92301 7111141</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_pin_alt"></span>
                                <h4>Address</h4>
                                <p>81, Commercial Umar Block, Sector B, Bahria Town Lahore.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_clock_alt"></span>
                                <h4>Open time</h4>
                                <p>10:00 am to 23:00 pm</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div className="contact__widget">
                                <span className="icon_mail_alt"></span>
                                <h4>Email</h4>
                                <p>
                                    <a href="https://mail.google.com/mail/u/0/#inbox" class="__cf_email__" data-cfemail="dbb3beb7b7b49bb8b4b7b4a9b7b2b9f5b8b4b6">salmanlobby3@gmail.com </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.0785095739775!2d74.19396091514733!3d31.384398681414762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDIzJzAzLjgiTiA3NMKwMTEnNDYuMSJF!5e0!3m2!1sen!2s!4v1615899047207!5m2!1sen!2s" width="600" height="450"  style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                <div className="map-inside">
                    <i className="icon_pin"></i>
                    <div className="inside-widget">
                        <h4>Behria Town</h4>
                        <ul>
                            <li>Phone: +92301 7111141</li>
                            <li>Add: Behria Town, Lahore, Pk</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact-form spad">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-12">
                         <div className="contact__form__title">
                             <h2>Leave Message</h2>
                         </div>
                     </div>
                 </div>
                 <form action="#">
                     <div className="row">
                         <div className="col-lg-6 col-md-6">
                             <input type="text" placeholder="Your name" />
                             </div>
                             <div className="col-lg-6 col-md-6">
                                 <input type="text" placeholder="Your Email" />
                                 </div>
                                 <div className="col-lg-12 text-center">
                                     <textarea placeholder="Your message"></textarea>
                                     <button type="submit" className="site-btn">SEND MESSAGE</button>
                                 </div>
                             </div>
                         </form>
                     </div>
                 </div>      
        </Layout>       
         );
    }

export default Contact;
