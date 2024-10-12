// src/Bakery.js
import React, { useState } from 'react';
import AddBakeryItem from './AddBakeryItem'; // Import the AddBakeryItem component
import BakeryItemsList from './BakeryItemsList'; // Import the BakeryItemsList component

const Bakery = () => {
  // State to hold bakery items
  const [bakeryItems, setBakeryItems] = useState([]);

  // Function to add new items to the list
  const handleAddItem = (newItem) => {
    const newId = bakeryItems.length + 1; // Simple ID generation
    setBakeryItems([...bakeryItems, { ...newItem, id: newId }]); // Add the new item
  };

  return (
    <div className="bakery-container">
      <AddBakeryItem onAddItem={handleAddItem} /> {/* Form for adding new items */}
      <BakeryItemsList items={bakeryItems} /> {/* List of bakery items */}
    </div>
  );
};

export default Bakery;
