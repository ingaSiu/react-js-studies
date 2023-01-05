// dar veinas budas kaip destrukturizuoti objekta
// children komponentas paima, kas yra tarp atviru tags prie app.js
// naudojamas for wrappers ar simple texts
const Button = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
