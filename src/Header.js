import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './herder.css';
import './bootstrap-5.0.2-dist/css/bootstrap.min.css';

const Header = ({ cart = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className="header"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: 'white', // Optional: Ensures the header has a background when sticky
            }}
        >
            <nav className="navbar navbar-expand-lg px-2">
                <a
                    className="navbar-brand"
                    href="/"
                    style={{ color: "#e24e2f", letterSpacing: 10 }}
                >
                    CYBAKE
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/" style={{ color: "#e24e2f" }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about" style={{ color: "#e24e2f" }}>About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AddBakeryItem" style={{ color: "#e24e2f" }}>Add Item</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact" style={{ color: "#e24e2f" }}>Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/viewall" style={{ color: "#e24e2f" }}>View All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Bakeryitemlist" style={{ color: '#e24e2f' }}>
                                Products
                            </a>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center gap-3">
                        {/* Cart Button */}
                        <Link to="/cart" style={{ textDecoration: 'none' }}>
                            <span
                                style={{
                                    borderRadius: '50%',
                                    padding: '4px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                }}
                            >
                                <i
                                    className="bi bi-cart"
                                    style={{
                                        fontSize: '1.5rem',
                                        color: '#e24e2f',
                                    }}
                                ></i>
                                <span
                                    style={{
                                        color: '#e24e2f',
                                        fontWeight: 'bold',
                                        position: 'relative',
                                        top: '-12px',
                                        right: '5px'
                                    }}
                                >
                                    {cart.length}
                                </span>
                            </span>
                        </Link>

                        {/* Login Button
                        <a
                            href="/login"
                            className="btn btn-outline-light rounded-pill"
                            style={{
                                height: '40px',
                                width: '90px',
                                background: "#e24e2f",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            Login
                        </a> */}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
