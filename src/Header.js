import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './herder.css';
import './bootstrap-5.0.2-dist/css/bootstrap.min.css';
import CartSummary from './Cartsummery';
const Header = ({cart = []}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark shadow sticky-top">
                <a className="navbar-brand ps-5 " href="/" style={{color:"#e24e2f"}}>Cybake</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    style={{background:"#e24e2f" , color:"whitesmoke"}}

                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-between ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/" style={{color:"#e24e2f"}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about" style={{color:"#e24e2f"}}>About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AddBakeryItem" style={{color:"#e24e2f"}}>Add item</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/contact"style={{color:"#e24e2f"}}>Contact us</a>
                        </li>
                        <li>

                        
                        <Link className="btn btn-outline-light rounded-pill" style={{ height: '40px', width: '90px', background:"#e24e2f"}}  to="/cart">
                         Cart ({cart.length})
                    </Link>
                    </li>
                        
                    </ul>
                    <ul className="navbar-nav">
                    <li className="nav-item ms-lg-auto">
    <span style={{ color: '#e24e2f' }}>
        <a href="Bakeryitemlist" className="nav-link" style={{ color: '#e24e2f' }}>
            <i className="bi bi-cart" style={{ fontSize: '1.5rem', color: '#e24e2f' }}></i>
        </a>
    </span>
</li>

                        <li className="ms-lg-auto mb-3 mt-lg-0 me-1">
                            <a href="/login" className="btn btn-outline-light rounded-pill" style={{ height: '40px', width: '90px', background:"#e24e2f" }}>
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
