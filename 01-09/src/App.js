import './App.css';
import { useState } from 'react';
import CustomButton from './components/CustomButton/CustomButton';
import Greeting from './components/Greeting';
import MenuList from './components/MenuList/MenuList';
import Avatar from './components/Avatar/Avatar';
import Card from './components/Card/Card';
import MoodChecker from './components/MoodChecker/MoodChecker';
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

  const cards = [
    {
      imageUrl:
        'https://www.rd.com/wp-content/uploads/2019/09/Cute-cat-lying-on-his-back-on-the-carpet.-Breed-British-mackerel-with-yellow-eyes-and-a-bushy-mustache.-Close-up-e1573490045672.jpg',
      title: 'Cat',
      subtitle: 'Amazing animal. Much sleep',
    },
    {
      imageUrl:
        'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-10/dog-583007.jpg?h=c6dbd090&itok=uY9_vnXo',
      title: 'Dog',
      subtitle: 'Loyal pet. Much boop',
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

      <button onClick={handleAddCount} disabled={count > 9}>
        Plus one
      </button>
      <span>{count}</span>
      <button onClick={handleSubtractCount} disabled={count < 0}>
        Minus one
      </button>
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
      <div>
        <MenuList customerType="single" />
        <MenuList customerType="family" />
        <MenuList customerType="couple" />
      </div>

      <div>
        <Avatar backgroundColor="grey" color="White">
          H
        </Avatar>
        <Avatar backgroundColor="orange" color="white">
          N
        </Avatar>
        <Avatar backgroundColor="purple" color="white">
          OP
        </Avatar>
      </div>

      <div>
        {cards.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} title={card.title} subtitle={card.subtitle} />
        ))}
      </div>
      <div>
        <MoodChecker />
      </div>
    </div>
  );
}

export default App;
