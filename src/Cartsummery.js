import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = ({ cart, totalBill, onCancel, confirmCancel, onConfirmCancel, onCancelCancel }) => {
    console.log('Props:', { cart, totalBill, onCancel, confirmCancel });

    return (
        <div className="container mt-4">
            <h2>Cart Summary</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            style={{ width: '100px', height: '100px' }} 
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>${Number(item.price).toFixed(2)}</td>
                                    
                                    <td>
                                        
                                        <button 
                                            className="btn btn-danger"
                                            onClick={() => onCancel(item.id)} // Ensure onCancel is defined and passed
                                        >
                                            Cancel Order
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-3">
                        <h4>Total Bill: ${Number(totalBill).toFixed(2)}</h4>
                    </div>
                    <div className='pb-5'>
                    <Link to="/Bakeryitemlist" className="btn btn-success mt-3 " style={{background:"#e24e2f"}}>Continue Shopping</Link>

                    </div>
                </>
            )}
        </div>
    );
};

export default CartSummary;
