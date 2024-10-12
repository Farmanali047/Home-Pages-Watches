import React from 'react';
import Image from './Images/1ba.jpg';
import './bakery.css';
const BakeryPage = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="content ">
                        <h1>Welcome to Cybake</h1>
                        <p>
                            Here's a short, enhanced version of the text for Cybake, incorporating information about bakery items:

                            Text for Cybake:
                            Welcome to Cybake!
                            Cybake is a cutting-edge bakery management system that streamlines operations by managing products, orders, and customer details efficiently. It enables bakery admins to oversee inventory, track sales in real-time, and optimize daily operations.

                            From fresh breads and pastries to custom cakes and seasonal treats, Cybake helps bakeries maintain top-quality standards, ensuring every item is crafted to perfection. Whether you're managing a small artisan bakery or a large-scale operation, Cybake simplifies the entire process, allowing you to focus on delivering delicious baked goods to your customers.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={Image} alt="Bakery Image" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default BakeryPage;
