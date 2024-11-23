import React from 'react';
import { Link } from 'react-router-dom';
import './cartSummary.css'; 

const CartSummary = ({ cart, totalBill }) => {
    console.log('Props:', { cart, totalBill });

    return (
        <div className="container mt-4">
            <h2>Cart Summary</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="horizontal-card-container">
                        {cart.map((item) => (
                            <div className="horizontal-card" key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="horizontal-card-img"
                                />
                                <div className="horizontal-card-body">
                                    <h5 className="horizontal-card-title">{item.name}</h5>
                                    <p className="horizontal-card-text">{item.description}</p>
                                    <p className="horizontal-card-price">
                                        ${Number(item.price).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3">
                        <h4>Total Bill: ${Number(totalBill).toFixed(2)}</h4>
                    </div>
                    <div className="pb-5">
                        <Link
                            to="/Bakeryitemlist"
                            className="btn btn-success mt-3"
                            style={{ background: '#e24e2f' }}
                        >
                            Continue Shopping
                        </Link>
                    </div>
                    <div></div>
                </>
            )}
        </div>

    );
};

export default CartSummary;
