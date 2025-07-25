import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <>
      {products.length === 0 ? (
        <p className="no-results">No products found matching your criteria.</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;