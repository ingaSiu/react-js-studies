import { fruitsArr } from './fruitsList';
import { useState } from 'react';

const FilterList = () => {
  const [input, setInput] = useState('');

  const searchFruit = (event) => {
    const value = event.target.value;
    console.log(value);
    setInput(value);
  };
  const found = input.length ? fruitsArr.filter((fruit) => fruit.includes(input)) : fruitsArr;

  return (
    <div>
      <h1>Fruits List</h1>
      <input type="text" onChange={searchFruit} />
      <ul>
        {found.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
