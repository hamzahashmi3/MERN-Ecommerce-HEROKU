import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './users/Signup';
import Signin from './users/Signin';
import Home from './Core/Home';
import PrivateRoute from './Auth/PrivateRoute';
import Dashboard from './users/UserDashboard';
import AdminRoute from './Auth/AdminRoute';
import AdminDashboard from './users/AdminDashboard';
import AddCategory from './Admin/AddCategory';
import AddProduct from './Admin/AddProduct';
import Shop from './Core/Shop';
import Product from './Core/Product';
import Contact from './Core/Components/Contactus';
import Cart from './Core/Cart'
import Orders from './Admin/Orders';
import Profile from './users/Profile';
import ManageProducts from './Admin/ManageProducts';
import UpdateProduct from './Admin/UpdateProduct';
import UpdateCategory from './Admin/UpdateCategory';

function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <AdminRoute path="/admin/products" exact component={ManageProducts} />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
                <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} />
            </Switch>
        </React.Fragment>
    )
}

export default Routes
