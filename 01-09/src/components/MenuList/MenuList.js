import './MenuList.css';

// 'single' | 'couple' | 'family'
const menu = [
  {
    customerType: 'single',
    items: [
      { title: 'Burger', price: '$5' },
      { title: 'Ice Cream', price: '$4' },
      { title: 'Pasta Marinara', price: '$8' },
      { title: 'Hot Dog', price: '$6' },
    ],
  },
  {
    customerType: 'couple',
    items: [
      { title: 'Fries', price: '$15' },
      { title: 'Ice Cream', price: '$14' },
      { title: 'Pasta with Meatballs', price: '$18' },
      { title: 'Pizza', price: '$15' },
    ],
  },
  {
    customerType: 'family',
    items: [
      { title: 'Fries and Dips', price: '$25' },
      { title: 'Ice Cream Bucket', price: '$24' },
      { title: 'Lasagna', price: '$28' },
      { title: 'Family style Pizza', price: '$30' },
    ],
  },
];

const MenuList = ({ customerType }) => {
  return (
    <ol>
      {menu
        .find((element) => {
          return element.customerType === customerType;
        })
        .items.map((titleItem, index) => (
          <li key={index}>
            {titleItem.title} {titleItem.price}
          </li>
        ))}
    </ol>
  );
};

export default MenuList;
