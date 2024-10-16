import React from 'react';
import Image from './Images/2ba.jpg';
import './bakery.css'; // Ensure you have a CSS file for styles

const AboutPage = () => {
    return (
        <main className="container">
            <div className="row" style={{
                marginTop:'-60px'
            }}>
                {/* Image Column */}
                <div className="col-md-6 mt-5">
                    <img 
                        src={Image} 
                        alt="Bakery Image" 
                        className="img-fluid mb-3 rounded-image" 
                    />
                    <p className="intro-text text-justify mt-5">
                        At Cybake, we believe in creating delightful experiences through our exceptional bakery products.
                        Our user-friendly system allows you to easily explore a wide range of baked goods, from
                        artisanal breads and pastries to custom cakes for every occasion. Experience the joy of baking
                        with our diverse offerings – your sweet treats await!
                    </p>
                </div>
                <div className="col-md-6 mt-5 pt-5">
                    <h2 className="section-title heading-style">Our Mission</h2>
                    <p className="mission-text text-justify ms-3">
                        Our mission at <b>Cybake</b> is to revolutionize the way you experience baked goods. We strive
                        to provide seamless and reliable services, catering to your individual needs. Whether you’re
                        looking for fresh bread for breakfast or a custom cake for a celebration, we offer a variety
                        of products at competitive prices. Our commitment goes beyond simply providing baked items; we
                        prioritize quality and satisfaction, ensuring a delightful experience every time.
                    </p>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    {/* Add the new class for spacing */}
                    <div className="values-section">
                        <h2 className="section-title heading-style" style={{
                            marginTop:'-20px'
                        }}>Our Values</h2>
                        <ul className="values-list text-justify" style={{
                            marginLeft:'135px'
                        }}>
                            <li>Quality Ingredients</li>
                            <li>Customer Satisfaction</li>
                            <li>Innovation and Creativity</li>
                            <li>Community Engagement</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AboutPage;
