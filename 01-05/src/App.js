import './App.css';
import Button from './components/Button/Button';
import { useState } from 'react';

// React hook - useState =>  storing information and setting information

const App = () => {
  //const name = 'Inga';
  //state pavyzdys, kai destruturizuojame auksciau pavaizduota name kintamaji
  // setName - jei noresiu pakeisti savo priskirta verte
  // useState turi tureti savo pradine reiksme, jei nera, tai turi buti ""
  // pagrindinis useState dalykas tureti reiksme, kuri gali kisti
  const [name, setName] = useState('Inga');
  const [age, setAge] = useState('28');
  const [count, setCount] = useState(0);

  const handleCountAdd = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button onClick={() => alert('Sveiki, kaip jums sekasi?')}>Say Hello</Button>
      <Button onClick={() => alert('Aciu,viso gero!')}>Say goodbye</Button>
      <Button onClick={() => console.log("I'm clicked...")}>Do not click here</Button>
      <Button backgroundColor="green">Help</Button>
      <Button
        backgroundColor="red "
        onClick={() => {
          setName('Luna');
        }}
      >
        {name}
      </Button>
      <Button
        backgroundColor="green"
        onClick={() => {
          setAge(age * 2);
        }}
      >
        Help me age is: {age}
      </Button>
      <Button onClick={handleCountAdd}>Plus one</Button>
      <span style={{ fontSize: 20, color: 'blue', margin: '0 10px' }}>{count}</span>
      <Button
        backgroundColor="black"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Minus one
      </Button>
    </div>
  );
};

export default App;
