import './MenuList.css';

// 'single' | 'couple' | 'family'
const menu = [
  {
    customerType: 'single',
    items: [
      { food: 'Burger', price: '$5' },
      { food: 'Ice Cream', price: '$4' },
      { food: 'Pasta Marinara', price: '$8' },
      { food: 'Hot Dog', price: '$6' },
    ],
  },
  {
    customerType: 'couple',
    items: [
      { food: 'Fries', price: '$15' },
      { food: 'Ice Cream', price: '$14' },
      { food: 'Pasta with Meatballs', price: '$18' },
      { food: 'Pizza', price: '$15' },
    ],
  },
  {
    customerType: 'family',
    items: [
      { food: 'Fries and Dips', price: '$25' },
      { food: 'Ice Cream Bucket', price: '$24' },
      { food: 'Lasagna', price: '$28' },
      { food: 'Family style Pizza', price: '$30' },
    ],
  },
];

const MenuList = ({ customerType }) => {
  if (customerType === 'single') {
    return (
      <ol>
        {menu.map((element, index) => {
          <li key={index}>
            {element.food} {element.price}
          </li>;
        })}
      </ol>
    );
  }
};

export default MenuList;
