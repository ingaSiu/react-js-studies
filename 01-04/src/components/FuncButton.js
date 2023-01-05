const FuncButton = (props) => {
  // props yra objektas pvz.,
  // {title: "Spausk mane", color: "red"}

  //objekto destrukturizacija, nes vienam komponente daug props galima prirasyti
  /*
  {
    color: 'red',
    title: 'some title'
  }
  */
  const { color, title } = props;

  return <button style={{ backgroundColor: color }}>{title}</button>;
};

export default FuncButton;
