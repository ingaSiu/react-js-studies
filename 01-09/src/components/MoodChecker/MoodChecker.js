import './MoodChecker';
import { useState } from 'react';
const MoodChecker = () => {
  const [message, setMessage] = useState('Kaip jauciates?');
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setMessage('Nieko tokio, viskas bus gerai')}>a. Jauciuosi prastai ;(</button>
      <button onClick={() => setMessage('Gerai, nujauciu, kad greitu metu jausites puikiai')}>
        b. Jauciuosi normaliai ;|
      </button>
      <button onClick={() => setMessage('Smagu girdeti, taip ir toliau')}>c. Jauciuosi puikiai ;)</button>
    </div>
  );
};
export default MoodChecker;
//dinaminis pavyzdys

/*const buttons = [
  { label: "Jauciuosi prastai", value: "Nieko tokio, viskas bus gerai" },
  { label: "Jauciuosi gerai", value: "Nieko tokio, viskas yra gerai" },
  { label: "Jauciuosi puikiai", value: "viskas bus gerai" },
];

return (
  <div>
    <h2>{message}</h2>
    {buttons.map((button) => (
      <button key={button.value} onClick={() => setMessage(button.value)}>
        {button.label}
      </button>
    ))}
  </div>
);
};*/
