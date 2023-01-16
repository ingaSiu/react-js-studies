import Button from './components/Button/Button.js';
import Product from './components/Product/Product.js';
import { productsList } from './components/Product/productsList.js';

import './App.css';

function App() {
  return (
    <div className="App">
      {productsList.map((item, index) => (
        <Product
          key={index}
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          description={item.description}
          availability={item.availability}
          category={item.category}
        >
          <Button />
        </Product>
      ))}
    </div>
  );
}

export default App;
