import React, { useEffect, useState } from 'react';
import './view.css';

const API_URL = 'http://localhost:8000/bakeryItems'; // Assuming you're using JSON Server

const BakeryItems = () => {
    const [items, setItems] = useState([]); // State to hold bakery items
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(''); // State for image URL
    const [description, setDescription] = useState(''); // State for item description
    const [selectedItemId, setSelectedItemId] = useState(null);

    // Fetch initial data from JSON server
    useEffect(() => {
        const fetchItems = async () => {
            try {    
                const response = await fetch(API_URL);
                const data = await response.json(); 
                setItems(data); // Set the fetched data directly to items
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    // Handle delete
    const handleDelete = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            const updatedItems = items.filter(item => item.id !== id);
            setItems(updatedItems); // Update state
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    // Handle update
    const handleUpdate = async (id) => {
        const updatedItem = { id, name, price: parseFloat(price), image, description }; // Include description in the updated item
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedItem),
            });
            const updatedItems = items.map(item => (item.id === id ? updatedItem : item));
            setItems(updatedItems); // Update state
            resetForm(); // Reset input fields
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const resetForm = () => {
        setName('');
        setPrice('');
        setImage(''); // Reset image state
        setDescription(''); // Reset description state
        setSelectedItemId(null);
    };

    return (
        <div className="bakery-items-container mt-3">
            <h2 className="text-center fs-1 ">Bakery Items</h2>
            <div className="card-container">
                {items && items.length > 0 ? (
                    items.map(item => (
                        <div className="card" key={item.id}>
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="card-img-top" 
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><strong>Price:</strong> {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : 'Invalid Price'}</p>
                                <div className="card-actions">
                                    <button 
                                        className="btn btn-warning" 
                                        onClick={() => {
                                            setSelectedItemId(item.id);
                                            setName(item.name);
                                            setPrice(item.price);
                                            setImage(item.image); // Set the image for updating
                                            setDescription(item.description); // Set the description for updating
                                        }}
                                    >
                                        Update
                                    </button>
                                    <button 
                                        className="btn btn-danger ms-2" 
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items available</p>
                )}
            </div>

            {selectedItemId && (
                <div className="update-item-form">
                    <h3>Update Item</h3>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="New Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        className="form-control mb-2"
                        placeholder="New Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="New Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)} // Handle image URL input
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="New Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} // Handle description input
                    />
                    <button className="btn btn-success" onClick={() => handleUpdate(selectedItemId)}>Update Item</button>
                </div>
            )}
        </div>
    );
};

export default BakeryItems;
