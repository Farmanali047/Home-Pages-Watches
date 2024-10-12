import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './Images/Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here (e.g., API call)
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card login-form">
                        <section>
                            <h2 className="text-center">LOGIN</h2>
                            <hr style={{color:"#e24e2f"}} />
                            <div className="card-body">
                                <form id="account" onSubmit={handleSubmit}>
                                    <div className="form-group text-start">
                                        <label for="email" className="form-label text-left">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter the Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group text-start">
                                        <label for="password" className="form-label ">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter the password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="m-2 p-3">
                                        <button type="submit" className="w-100 btn text-light" style={{ backgroundColor: '#e24e2f' }}>Log in</button>
                                    </div>
                                    <div className="text-center">
                                        
                                        <p className='fs-6'>
                                            Don't Have an account? 
                                            <a href="/Register" className="signup-link" style={{ color: '#e24e2f' }}>SignUp</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
