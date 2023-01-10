import './App.css';
import { useState } from 'react';
import CustomButton from './components/CustomButton/CustomButton';
import Greeting from './components/Greeting';
import MenuList from './components/MenuList/MenuList';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount(count + 1);
  };
  const handleSubtractCount = () => {
    setCount(count - 1);
  };

  const fruits = ['Banana', 'Apple', 'Orange', 'Pineapple'];

  const buttons = [
    {
      variant: 'outlined',
      text: 'Help me to get random number',
    },
    {
      variant: 'text',
      text: 'I am noice',
    },
    {
      variant: 'contained',
      text: 'contained contained',
    },
    {
      variant: 'text',
      text: 'text text',
    },
  ];

  return (
    <div className="App">
      <div>
        <CustomButton variant="text">Text</CustomButton>
        <CustomButton variant="contained">Contained</CustomButton>
        <CustomButton variant="outlined">Outlined</CustomButton>
      </div>

      <Greeting isLoggedIn={isLoggedIn} />

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}

      <button onClick={handleAddCount}>Plus one</button>
      <span>{count}</span>
      <button onClick={handleSubtractCount}>Minus one</button>
      <span style={{ marginLeft: 8, color: 'red' }}>
        {count < 0 && 'Negalima pasirinkti maziau nei 0 prekiu'}
        {count > 9 && 'Jus pridejote per dideli prekiu kieki'}
      </span>

      {['Cat', 'Dog', 'Hamster'].map((item, index) => (
        <CustomButton key={index}>{item}</CustomButton>
      ))}

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      {buttons.map((button, index) => (
        <CustomButton key={index} variant={button.variant}>
          {button.text}
        </CustomButton>
      ))}

      <MenuList customerType="single" />
    </div>
  );
}

export default App;
