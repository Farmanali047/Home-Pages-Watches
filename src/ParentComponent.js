import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import CartSummary from './CartSummary';

const ParentComponent = () => {
    console.log('ParentComponent Render');

    const [cart, setCart] = useState([]);
    // Fetch cart items on component mount
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:8000/cartItems');
                setCart(response.data); // Store fetched items in state
            } catch (err) {
                setError('Failed to fetch cart items');
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    // Calculate total bill using useMemo to optimize re-renders
    const totalBill = useMemo(() => {
        return cart.reduce((total, item) => total + item.price, 0);
    }, [cart]);


};

if (loading) return <div>Loading...</div>;
if (error) return <div>{error}</div>;

return (
    <div>
        <CartSummary
            cart={cart}
            totalBill={totalBill}

        />
    </div>
);


export default ParentComponent;
