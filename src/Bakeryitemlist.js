// BakeryItemsList.js
import React, { useState } from 'react';
import './BakeryItemsList.css';

const BakeryItemsList = ({ items, onAddToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState(''); // Category filter state
    const [searchQuery, setSearchQuery] = useState(''); // Search query state

    // Extract unique categories from the items list
    const categories = [...new Set(items.map(item => item.category))];

    // Filter items based on the selected category and search query
    const filteredItems = items.filter(item => {
        const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-md-6">
                    <label className="form-label">Filter by Category</label>
                    <select
                        className="form-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

               
            </div>

            <div className="row">
                {filteredItems.length === 0 ? (
                    <p className="text-center">No bakery items available.</p>
                ) : (
                    filteredItems.map(item => (
                        <div key={item.id} className="col-md-4 mt-4">
                            <div className="bakery-item card d-flex flex-column justify-content-between">
                                <div>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{ width: '300px', height: '300px' }} 
                                        className="card-img-top bakery-image img-fluid" 
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Description: {item.description}</p>
                                        <p className="card-text">Price: ${Number(item.price).toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around align-items-center">
                                    <button
                                        className="btn btn-success " style={{ background:"#e24e2f"}}
                                        onClick={() => onAddToCart(item)}
                                    >
                                        Add to Cart
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BakeryItemsList;
