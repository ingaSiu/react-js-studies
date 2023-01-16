import { itemsList } from './components/ItemCard/itemsList.js';
import ItemCard from './components/ItemCard/ItemCard';
import './App.css';
import { useState } from 'react';
import ButtonDel from './components/ButtonDel/ButtonDel';

function App() {
  const [items, setItems] = useState(itemsList);
  const deleteById = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  return (
    <div className="App">
      {items.map((item) => (
        <ItemCard key={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price}>
          <ButtonDel delFncProp={() => deleteById(item.id)} />
        </ItemCard>
      ))}
    </div>
  );
}

export default App;
