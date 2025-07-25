const SearchBar = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onlyInStock,
  setOnlyInStock,
  categories
}) => {
  return (
    <div className="filters">
      <div className="search-bar">
        <label htmlFor="search">Search by name:</label>
        <input
          id="search"
          type="text"
          placeholder="Type product name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="category-filter">
        <label htmlFor="category">Filter by category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
      <div className="stock-filter">
        <label>
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={(e) => setOnlyInStock(e.target.checked)}
          />
          Only show in-stock items
        </label>
      </div>
    </div>
  );
};

export default SearchBar;