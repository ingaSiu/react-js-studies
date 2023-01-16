import { useParams } from 'react-router-dom';
import { getCarById } from '../api/cars';
import Topbar from '../components/Topbar';

const CarDetailsPage = () => {
  const { id } = useParams();
  const car = getCarById(Number(id));
  return (
    <div>
      <Topbar />
      <h2>
        {car.make} {car.model}
      </h2>
      <br />
      <div>
        color: <span style={{ backgroundColor: car.color }}>{car.color}</span>
      </div>
    </div>
  );
};

export default CarDetailsPage;
