const cars = [
  {
    id: 1,
    make: 'Subaru',
    model: 'Perfecto',
    year: 2010,
    color: 'blue',
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Rusty',
    year: 1999,
    color: 'red',
  },
];

export const getCars = () => {
  return cars;
};
export const getCarById = (id) => {
  return cars.find((car) => car.id === id);
};

// iskvietus funkcijas, gaunami rezultatai

// getCarById(1); // {id:1, title: "Subaru", subtitle: "Perfecto"}
// getCars(); // [...]
