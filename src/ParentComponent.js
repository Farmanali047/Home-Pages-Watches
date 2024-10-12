import React, { useEffect, useState, useCallback } from 'react';

const ParentComponent = () => {
    console.log('ParentComponent Render', { cart, totalBill });
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [confirmCancel, setConfirmCancel] = useState(null);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:8000/cartItems');
                setCart(response.data);
            } catch (err) {
                setError('Failed to fetch cart items');
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    const totalBill = cart.reduce((total, item) => total + item.price, 0);

    const handleCancel = useCallback((id) => {
        setConfirmCancel(id);
    }, []); // Empty dependency array ensures it remains the same

    const confirmCancelOrder = () => {
        const updatedCart = cart.filter(item => item.id !== confirmCancel);
        setCart(updatedCart);
        setConfirmCancel(null);
    };

    const cancelCancelOrder = () => {
        setConfirmCancel(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <CartSummary 
                key={cart.length} 
                cart={cart} 
                totalBill={totalBill} 
                onCancel={handleCancel} 
                confirmCancel={confirmCancel} 
                onConfirmCancel={confirmCancelOrder}
                onCancelCancel={cancelCancelOrder}
            />
            {confirmCancel !== null && (
                <div className="alert alert-warning mt-4">
                    <p>Are you sure you want to cancel this order?</p>
                    <button className="btn btn-danger" onClick={confirmCancelOrder}>Yes, Cancel</button>
                    <button className="btn btn-secondary" onClick={cancelCancelOrder}>No, Keep it</button>
                </div>
            )}
        </div>
    );
};
export default ParentComponent;