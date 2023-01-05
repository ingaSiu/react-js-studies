import './App.css';
import Logo from './components/Logo';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';

// App.js yra pagrindinis komponentas
// vienas failas = vienas komponentas
// komponentai rasomi didziaja raide
// komponentai buna dvieju tipu: funkciniai ir klasiniai
// Funkciniai atrodo kaip funkcijos tik is didziosios raides. Regular ar arrow functions
// class => className
function App() {
  //cia galima rasyti kintamuosius, kuriuos galima paduoti
  //funkcijos viduje virs return yra rasoma visa logika
  // butinai turime funkcija iskviesti, kad gautume jos return

  // po Return dalyje rasoma JSX (js extension => js + html)
  return (
    <div className="container">
      <Logo />
      <NavigationBar />
      <Hero />
    </div>
  );
}

export default App;
