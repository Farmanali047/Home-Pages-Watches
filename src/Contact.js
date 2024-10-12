// ContactUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
const ContactUs = () => {
    return (
        <body>
        <div className="container ">
            <div className="row">
                <div className="col-md-6 pt-5">
                    <h2 className=" text-start">Contact Information</h2>
                    <p className="fs-6">
                        Feel free to reach out to us using the information below, or fill out the contact form on the right.
                    </p>
                    <ul className="list-group">
                        <li className="list-group-item d-flex align-items-center">
                            <i className="fas fa-phone-alt" style={{ color: "#e24e2f", marginRight: "10px" }}></i>
                            <strong style={{  marginRight: "10px" }}>Phone:</strong>
                            <a href="tel:+923208180910" style={{ color: "#e24e2f" }}>+92320-8180910</a>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <i className="fas fa-envelope" style={{ color: "#e24e2f", marginRight: "10px" }}></i>
                            <strong style={{  marginRight: "10px" }}>Email:</strong>
                            <a href="mailto:farmanali35450@gmail.com" style={{ color: "#e24e2f" }}>farmanali35450@gmail.com</a>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <i className="fas fa-map-marker-alt" style={{ color: "#e24e2f", marginRight: "10px" }}></i>
                            <strong style={{ marginRight: "10px" }}>Address:</strong>
                            <a href="https://maps.app.goo.gl/5E5qdScQ3f3cntMDA" style={{ color: "#e24e2f" }}>Lahore, Pakistan</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h2 className='df text-start'>Contact Form</h2>
                    <form id="contactForm">
                        <div className="mb-3 pt-4 text-start">
                            <label for="name" className="form-label  " >Name</label>
                                <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3 text-start ">
                            <label for="email" className="form-label " >Email address</label>
                        
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 text-start ">
                            <label for="message" className="form-label " >Message</label>
                           
                                <textarea className="form-control" id="message" rows="3" required></textarea>
                            
                        </div>
                        <button type="submit" className="btn text-light" style={{ backgroundColor: "#e24e2f" }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </body>
    );
};

export default ContactUs;
