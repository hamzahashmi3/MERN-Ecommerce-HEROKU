import React, { Component } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Layouts/Header';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Contact from './Components/contact_us';
import Blog from './Components/Blog';
import Blog_detail from './Components/Blog_details';
import Shop_detail from './Components/Shop_details';
import Shopping_cart from './Components/Shopping_cart';
import Checkout from './Components/checkout';
import Footer from './Components/Layouts/Footer';
import Product_items from './Components/Layouts/Product_items';
import Banner from './Components/Layouts/Banner';
import Post from './Components/Layouts/blogPost';
import Article from './Components/Layouts/Article';
import Login from './Components/Layouts/Login';
import Register from './Components/Layouts/register';
import Logout from './Components/Layouts/logout';
import store from './store';

function App() {
  return (
    <div>
          <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route exact path="/blog"  component={Blog} />
                <Route path="/blog_details" exact component={Blog_detail} />
                <Route path="/shop_details" exact component={Shop_detail} />
                <Route path="/shop_cart" exact component={Shopping_cart} />
                <Route path="/checkout" exact component={Checkout} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/products" exact component={Product_items} />
                <Route path="/article" exact component={Article} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/register" exact component={Register} />
            </Switch>
          <Footer />
    </div>
  );
}

export default App;
