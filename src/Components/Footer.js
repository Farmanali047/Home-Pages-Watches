import { BiBluetooth } from "react-icons/bi";
import PersonalizeButton from "./PersonalizeButton";

const Footer = () => {
    return (
        <div className="container-fluid Footer" style={{ backgroundColor: '#3575dd', paddingTop: '0px' }}>

            <div className="row" style={{ marginTop: '50px' }}>
                <div className="col-lg-2"></div>

                <div className="col-lg-3 text-center">
                    <h1 className="form-title">The  ETERNIS Gazette</h1>
                    <p className="form-subtitle">
                        Subscribe to the Gazette and be the first to  <br />  receive the latest news
                        from Maison Eternis.
                    </p>
                    <form className="footer-form" style={{ maxWidth: '500px', margin: '0 auto' ,marginBottom:'15px' }}>
                        <input
                            type="email"
                            className="form-control email-input"
                            placeholder="Your email address"
                            required
                        />
                    <PersonalizeButton dataElement="SUBMIT" url="www.google.com" colore="white"/>

                    </form>


                </div>

                <div className="col-lg-2 text-center">
                    <img src="/images/l.png" alt="ETERNIS Logo" style={{ height: '50px', width: '70px', marginBottom: '10px', marginTop: '10px' }} />

                    {/* Footer Social Media Icons */}
                    <div className="footer-social-icons">
                        <div className="footer-icon"><i className="fab fa-instagram"></i></div>
                        <div className="footer-icon"><i className="fab fa-facebook"></i></div>
                        <div className="footer-icon"><i className="fab fa-whatsapp"></i></div>
                        <div className="footer-icon"><i className="fab fa-youtube"></i></div>
                        <div className="footer-icon"><i className="fab fa-twitter"></i></div>
                        <div className="footer-icon"><i className="fas fa-comment-dots"></i></div>
                    </div>
                </div>


                <div className="col-lg-3 text-center">
                    <h1 className="form-title">Customer Service</h1>
                    <p className="service-text">Product & Sales Information</p>
                    <p className="service-text">After-sales Service</p>
                    <p className="service-text">Press</p>
                    <p className="service-text">Career</p>
                    <p className="service-text">Taking Care of your Eternis</p>
                    <p className="service-text">FAQ</p>
                    <h1 className="form-title">ETERNIS Stores</h1>
                    <p className="service-text">Find a store</p>

                </div>

                <div className="col-lg-2"></div>
            </div>
            <div className="row text-center" >

                <p className="service-text">      Cookies policy  .  Legal Information </p>
                <p className="service-text">Accessibillity . General terms and conditions </p>
                <p className="service-text">Privacy policy . Cookies </p>
            </div>

            <div className="row text-center" style={{ background: 'linear-gradient(to bottom right, #3B82F6,#112749)',marginTop:'40px' }}>

                <p style={{ color: "#ccc", marginTop: "36px", fontSize: "14px", marginBottom: '35px' }}>Copyright © 2024 ETERNIS. All rights reserved</p>

            </div>

        </div>

    );
}

export default Footer;
