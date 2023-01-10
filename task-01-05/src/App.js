import Product from './components/Product/Product';
import ProductsData from './ProductsData';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header-text">BEST SELLERS</div>
      <div className="product-wrapper">
        {ProductsData.map((productData, index) => {
          return (
            <Product key={index} category={productData.category} name={productData.name} price={productData.price} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
