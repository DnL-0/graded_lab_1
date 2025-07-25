import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

const products = [
  { id: 1, name: "Blue T-Shirt", category: "Clothing", price: "R150", inStock: true },
  { id: 2, name: "Black Jeans", category: "Clothing", price: "R300", inStock: false },
  { id: 3, name: "Red Sneakers", category: "Shoes", price: "R500", inStock: true },
  { id: 4, name: "Wireless Mouse", category: "Accessories", price: "R250", inStock: true },
  { id: 5, name: "Office Chair", category: "Furniture", price: "R1200", inStock: false },
  { id: 6, name: "White Dress Shirt", category: "Clothing", price: "R200", inStock: true },
  { id: 7, name: "Running Shoes", category: "Shoes", price: "R450", inStock: true },
  { id: 8, name: "Leather Belt", category: "Accessories", price: "R180", inStock: false },
  { id: 9, name: "Denim Jacket", category: "Clothing", price: "R400", inStock: true },
  { id: 10, name: "Smart Watch", category: "Accessories", price: "R800", inStock: true },
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [onlyInStock, setOnlyInStock] = useState(false);

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesStock = !onlyInStock || product.inStock;
    
    return matchesSearch && matchesCategory && matchesStock;
  });

  return (
    <div className="App">
      <h1>ShopEasy Product Catalogue</h1>
      
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onlyInStock={onlyInStock}
        setOnlyInStock={setOnlyInStock}
        categories={categories}
      />
      
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;