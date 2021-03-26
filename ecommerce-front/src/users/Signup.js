import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Core/Layout';
// import {API} from '../Config';
import { signup } from '../Auth/Index';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };


    // const signup = ( user )=>{
    //     return fetch(`${API}/signup`,{
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(user)
    //     })
    //     .then(res=>{
    //         return res.json()
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }


    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password })
        .then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                });
            }
        });
    };

    const signUpForm = () => (
        <div classNameName="container">
        <center>
        <div classNameName="row">
            <div className="col-md-4 my-4 p-5 rounded"  style={{background:"#eee"}}>
                <form>
                    <div>
                        <h3 className="m-0"> Registration </h3> 
                        <hr />
                    </div>
                    <div className="form-group">
                        <label className="float-left" for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Full Name" value={name} onChange={handleChange('name')} />
                    </div>
                    <div className="form-group">
                        <label className="float-left" for="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your Email" value={email} onChange={handleChange('email')} />
                        <small id="emailHelp" className="form-text text-muted float-left">We'll never share your email with anyone else.</small> <br />
                    </div>
                    <div className="form-group">
                        <label className="float-left" for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" value={password} onChange={handleChange('password')}/>
                    </div>
                    {/* <div className="form-group">
                    <label className="float-left" for="exampleInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Your Password"  />

                    </div>
                    <div className="form-group">
                    <label className="float-left" for="exampleInputPhone1">Cell No</label>
                    <input type="number" className="form-control" id="exampleInputPhone1" placeholder="Your Phone No" />
                    </div> */}
                    <p className="">Already have an Account? <Link to="/signin" className="text-primary"> Login here</Link></p>
                    <button onClick={clickSubmit} className="btn btn-primary rounded-0" style={{background: "#7fad39", fontWeight:"bolder", border:"none"}}>Submit</button>
                </form>
                
            </div>
        </div><br />
        </center>
    </div> 
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    return (
        <Layout
            title="Signup"
            description="Signup to Node React E-commerce App"
            className="container col-md-8 offset-md-2" >

            {showSuccess()}
            {showError()}
            {signUpForm()}
        </Layout>
    );
};

export default Signup;
