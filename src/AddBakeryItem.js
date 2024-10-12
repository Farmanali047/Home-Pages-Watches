// AddBakeryItem.js
import React, { useState } from 'react';
import './AddBakeryItemForm.css';

const AddBakeryItem = ({ onAddItem }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        category: '' // New field for category
    });

    const categories = ['Cakes', 'Cookies', 'Pastries', 'Bread', 'Desserts']; // List of categories

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, description, price, image, category } = formData;

        if (!name || !description || !price || !image || !category) {
            alert('Please fill in all fields.');
            return;
        }

        onAddItem(formData); // Call the function to add the item
        setFormData({ name: '', description: '', price: '', image: '', category: '' }); // Clear form
    };

    return (
        <div className="container col-lg-6 col-md-8 col-sm-10 add-item-container">
            <h2>Add Bakery Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                    <label className="form-label">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        className="form-control" 
                        placeholder="Enter item name" 
                        required 
                    />
                </div>

                <div className="mb-4 text-start">
                    <label className="form-label">Description</label>
                    <input 
                        type="text" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleInputChange} 
                        className="form-control" 
                        placeholder="Enter item description" 
                        required 
                    />
                </div>

                <div className="mb-3 text-start">
                    <label className="form-label">Price</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={formData.price} 
                        onChange={handleInputChange} 
                        className="form-control" 
                        placeholder="Enter item price" 
                        required 
                        step="0.01" 
                    />
                </div>

                <div className="mb-3 text-start">
                    <label className="form-label">Image URL</label>
                    <input 
                        type="text" 
                        name="image" 
                        value={formData.image} 
                        onChange={handleInputChange} 
                        className="form-control" 
                        placeholder="Enter image URL" 
                        required 
                    />
                </div>

                <div className="mb-3 text-start">
                    <label className="form-label">Category</label>
                    <select 
                        name="category" 
                        value={formData.category} 
                        onChange={handleInputChange} 
                        className="form-control" 
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddBakeryItem;
