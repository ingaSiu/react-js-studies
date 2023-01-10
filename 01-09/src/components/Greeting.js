const Greeting = ({ isLoggedIn }) => {
  return <p>{isLoggedIn ? 'Hello there' : 'You need to log in first'}</p>;
};

export default Greeting;

// paduodam isLoggedIn, kad galetume patikrinti ar prisijunges ar ne
// pagal ternary israiska atvaizduoja ta text, kuris atitinka salyga
// pridejus prie app matosi, kad default reiksme yra false
