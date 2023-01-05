import './App.css';
import Button from './components/Button/Button';
import CardDiv from './components/CardDiv/CardDiv';
import Hero from './components/hero/Hero';
import InfoDiv from './components/InfoDiv/InfoDiv';
function App() {
  const portfolioText = 'text text';
  const cardsData = [
    {
      title: 'test test',
      imageUrl: 'https://i.pinimg.com/originals/6f/bd/91/6fbd91a10a983dc3cf9e2c9d4734c1f7.jpg',
    },
    {
      title: 'test test',
      imageUrl: 'https://i.pinimg.com/originals/6f/bd/91/6fbd91a10a983dc3cf9e2c9d4734c1f7.jpg',
    },
    {
      title: 'test test',
      imageUrl: 'https://i.pinimg.com/originals/6f/bd/91/6fbd91a10a983dc3cf9e2c9d4734c1f7.jpg',
    },
    {
      title: 'text text',
      imageUrl: 'https://thejapantry.com/wp-content/uploads/2019/05/Shiba-Inu-at-Cafe.jpg',
    },
    {
      title: 'text text',
      imageUrl: 'https://thejapantry.com/wp-content/uploads/2019/05/Shiba-Inu-at-Cafe.jpg',
    },
    {
      title: 'text text',
      imageUrl: 'https://thejapantry.com/wp-content/uploads/2019/05/Shiba-Inu-at-Cafe.jpg',
    },
  ];

  return (
    <div className="wrapper">
      <div className="container">
        <Hero title="Title" textOne="Some about text" textTwo="in two lines">
          <Button title="Button" />
        </Hero>
        <InfoDiv title="Portfolio" description={portfolioText}>
          {cardsData.map((cardData) => {
            return <CardDiv title={cardData.title} imageUrl={cardData.imageUrl} />;
          })}
        </InfoDiv>
      </div>
    </div>
  );
}

export default App;
