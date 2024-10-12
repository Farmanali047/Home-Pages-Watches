import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
const Register = () => {
    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic here
        console.log('Form submitted', formData);
    };

    return (
        <body>
        <section className="container col-lg-6 col-md-10 col-sm-12 signup-container">
            <h1 className="text-center">Sign-Up</h1>
            <p className="text-center">Please fill out this form with the required information</p>
            <form id="registerForm" onSubmit={handleSubmit}>
                <hr />
                <div className="row g-3">
                    <div className="col-md-6 text-start">
                        <label for="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            className="form-control "
                            required
                            placeholder="Enter the First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-6 text-start">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            className="form-control"
                            required
                            placeholder="Enter the Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-6 text-start">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            required
                            placeholder="Enter the Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-6 text-start">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            required
                            placeholder="Enter the password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-6 mx-auto text-start">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            className="form-control"
                            required
                            placeholder="Enter the Confirm password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <button id="registerSubmit" type="submit" className="btn text-light" style={{ backgroundColor: '#e24e2f' }}>
                        Register
                    </button>
                </div>
            </form>
        </section>
        </body>
    );
};

export default Register;
