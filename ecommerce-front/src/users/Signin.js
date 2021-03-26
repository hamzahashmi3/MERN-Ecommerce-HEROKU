import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../Core/Layout';
import { signin, authenticate, isAuthenticated } from '../Auth/Index';

const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToRefferer: false
    });

    const { email, password, loading, error, redirectToRefferer } = values;
    const {user} = isAuthenticated()

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };



    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
        .then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate( data, ()=>{ 
                        setValues({
                        ...values,
                        redirectToRefferer : true
                    });
                })
            }
        });
    };

    const signInForm = () => (
            <center>
                <div classNameName="container">
                <div classNameName="row">
                    <div className="col-md-4 my-4 p-4 rounded"  style={{background:"#eee"}}>
                        <form className="mr-auto">
                            <div><h3> Log In </h3> <hr /> </div>
                            <div className="form-group">
                                <label className="float-left">Email</label>
                                <input type="email" className="form-control" name="email" onChange={handleChange('email')} placeholder="Enter email"  value={email}  />
                                <small className="form-text text-muted pull-left">We'll never share your email with anyone else.</small> <br />
                            </div>
                            <div className="form-group">
                                <label className="float-left">Password</label>
                                <input type="password" className="form-control" placeholder="Password" name="password" onChange={handleChange('password')} value={password} />
                            </div>
                            <p className="py-1">Need An Account? <Link to="/signup" className="text-primary"> Register here </Link></p>
                            <button onClick={clickSubmit} className="btn btn-primary rounded-0" style={{background: "#7fad39", fontWeight:"bolder", border:"none"}}> Submit </button>
                        </form>
                    </div>
                </div>
            </div> <br />
            </center>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showLoading = () => loading && (
        <div className="alert alert-info">
            <h2>Loading ...</h2>
        </div>
    );

    const redirectUser =()=>{
        if (redirectToRefferer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
        <Layout>
            {showLoading()}
            {showError()}
            {signInForm()}
            {redirectUser()}
        </Layout>
    );
};

export default Signin;

