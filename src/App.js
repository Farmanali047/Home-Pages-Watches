
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./Header";
import Imageandtext from "./imageandtext";
import AboutPage from './about';
import ContactUs from './Contact';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import Register from './Register';
import BakeryItemsList from './Bakeryitemlist';
import AddBakeryItem from './AddBakeryItem';
import CartSummary from './Cartsummery'; 
import View from './viewall';
import axios from 'axios'; 

const API_URL = 'http://localhost:8000/bakeryItems'; // JSON-server URL

function App() {
    const [items, setItems] = useState([]); // State for bakery items
    const [cart, setCart] = useState([]);   // State for cart items

    // Fetch bakery items from JSON-server when the app loads
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get(API_URL);
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleAddItem = async (newItem) => {
        try {
            const response = await axios.post(API_URL, newItem);
            setItems((prevItems) => [...prevItems, response.data]); // Update state with new item
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    // Function to handle adding items to the cart
    const handleAddToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]); // Update cart state with new item
    };

    // Calculate total bill for the cart
    const totalBill = cart.reduce((sum, item) => sum + Number(item.price), 0);

    return (
        <Router>
            <div className="App">
                
                
                <MainLayout 
                    items={items} 
                    onAddItem={handleAddItem} 
                    onAddToCart={handleAddToCart} 
                    cart={cart}
                    totalBill={totalBill}
                />
            </div>
        </Router>
    );
}

function MainLayout({ items, onAddItem, onAddToCart, cart, totalBill }) {
    const location = useLocation();
    const hideHeaderPaths = ['/login', '/register'];

    return (
        <>
            {!hideHeaderPaths.includes(location.pathname.toLowerCase()) && <Header cart={cart} />}
            <div className="container">
                <Routes>
                    <Route 
                        path="/" 
                        element={<Home items={items} onAddToCart={onAddToCart} />} 
                    />
                    <Route 
                        path="/Bakeryitemlist" 
                        element={<BakeryItemsList items={items} onAddToCart={onAddToCart} />} 
                    />
                    <Route 
                        path="/AddBakeryItem" 
                        element={<AddItemPage onAddItem={onAddItem} />} 
                    />
                    <Route 
                        path="/cart" 
                        element={<CartSummary cart={cart} totalBill={totalBill} />} 
                    />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/viewall" element={<View items={items} />} /> {/* Add this line */}

                </Routes>
            </div>
        </>
    );
}

function Home({ items, onAddToCart }) {
    return (
        <>
            <Imageandtext />
            <AboutPage />
            <BakeryItemsList items={items} onAddToCart={onAddToCart} />
        </>
    );
}

function AddItemPage({ onAddItem }) {
    return <AddBakeryItem onAddItem={onAddItem} />;
}

export default App;
