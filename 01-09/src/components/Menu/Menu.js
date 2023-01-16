import { singleMenu, coupleMenu, familyMenu } from './const';
const Menu = ({ customerType }) => {
  const getCustomerMenu = (customerType) => {
    if (customerType === 'single') {
      return singleMenu;
    } else if (customerType === 'couple') {
      return coupleMenu;
    } else {
      return familyMenu;
    }
  };
  const customerMenu = getCustomerMenu(customerType);

  return (
    <ol>
      {customerMenu.map((item) => (
        <li>
          {item.itemName}
          <strong> ${item.price}</strong>
        </li>
      ))}
    </ol>
  );
};
export default Menu;
