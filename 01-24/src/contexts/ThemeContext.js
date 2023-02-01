import { createContext, useState } from 'react';

const ThemeContext = createContext();
//priskiariam themecontext react body ir ji naudosim

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    // kaskart nuspaudus mygtuka pakeis i true ar false
  };
  //{darkmode: darkMode, toggleDarkMode: toggleDarkMode} vietoj to
  //naudojasm shorthand su dviem {}
  // vienas {} reikalingas, kad paduoti kaip propsa, kitas kad paduoti kaip object
  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
  // dvigubos {}, nes reikia istraukti object
};

export { ThemeProvider, ThemeContext };
