import './App.css';
import Button from './components/Button';
import ClassButton from './components/ClassButton';
import ClassDiv from './components/ClassDiv';
import FuncButton from './components/FuncButton';
import FuncDiv from './components/FuncDiv';
import Hero from './components/Hero';
function App() {
  return (
    <div className="App">
      <FuncButton title="Spausk mane" color="red" />
      <FuncButton title="Nespausk prasau" />
      <FuncDiv title="Labas" subtitle="Krabas" buttonText="Uvagas" color="blue" />
      <ClassButton title="Klasinis mygtukas" />
      <ClassDiv title="Nieko nezinau" subtitle="Bla bla bla" buttonName="La la la" />
      <Button>Inga spausk cia</Button>
      <Hero color="green" title="Info hero" subtitle="Info subtitle" />
    </div>
  );
}

export default App;
