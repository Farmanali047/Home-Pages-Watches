
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./Header";
import AboutPage from './about';
import ContactUs from './Contact';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './Register';
import BakeryItemsList from './Bakeryitemlist';
import AddBakeryItem from './AddBakeryItem';
import CartSummary from './Cartsummery';
import View from './viewall';
import Home from './Home';
import Footer from './footer';
const API_URL = 'http://localhost:8000/bakeryItems'; // JSON-server URL

function App() {
   // const location = useLocation();
    //const hideHeaderPaths = ['/login', '/register']; // Move this above the return statement

    const [items, setItems] = useState([]); // State for bakery items
    const [cart, setCart] = useState([]);   // State for cart items

    // Fetch bakery items from JSON-server when the app loads
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json(); 
            setItems(data); 
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };
    
    

    const handleAddItem = async (newItem) => {
        try {
            const response = await fetch(API_URL, {
                method:'POST',
                body: JSON.stringify(newItem),
            });
            const data = await response.json();
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
            <div className="App">               
<Header cart={cart} />
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home items={items} onAddToCart={handleAddToCart} />}
                        />
                        <Route
                            path="/Bakeryitemlist"
                            element={<BakeryItemsList items={items} onAddToCart={handleAddToCart} />}
                        />
                        <Route
                            path="/AddBakeryItem"
                            element={<AddBakeryItem onAddItem={handleAddItem} />}
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
                <Footer></Footer>
            </div>
    );
}

export default App;


